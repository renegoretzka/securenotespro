import { useEffect, useState } from 'react'
import Link from 'next/link'

import { withSSRContext } from 'aws-amplify'

import ConfirmSignUpModal from '@/components/ConfirmSignUpModal'
import Header from '@/components/Header'
import { ShieldCheckIcon } from '@heroicons/react/solid'

import { useSignUpMutation } from '@/context/user'

export default function Register() {
  const [signUp, { isSuccess, isError, error }] = useSignUpMutation()
  const [confirmSignUp, { isSuccess, isError, error }] =
    useConfirmSignUpMutation()

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeFullname(event) {
    setFullname(event.target.value)
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }
  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function handleRegister(event) {
    signUp({
      email,
      password,
      fullname
    })
    event.preventDefault()
  }

  const [confirmSignUpModal, setConfirmSignUpModal] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      setConfirmSignUpModal(true)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      if (error.code === 'UsernameExistsException') {
        // TODO: Handle user is already registered (e.g. Notification -> Push to login)
      }
    }
  }, [isError])

  return (
    <>
      <Header title="Secure Notes Pro - Register" />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <ShieldCheckIcon className="mx-auto w-auto h-12" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/login">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                Login
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleRegister}>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    id="fullname"
                    name="fullname"
                    value={fullname}
                    onChange={handleChangeFullname}
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ConfirmSignUpModal
        email={email}
        show={confirmSignUpModal}
        setShow={setConfirmSignUpModal}
      />
    </>
  )
}

export async function getServerSideProps({ req }) {
  const { Auth } = withSSRContext({ req })
  try {
    await Auth.currentAuthenticatedUser()
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}
