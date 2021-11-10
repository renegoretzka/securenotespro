import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Header from '@/components/Header'
import ConfirmSignUpModal from '@/components/ConfirmSignUpModal'
import { ShieldCheckIcon } from '@heroicons/react/solid'

import { useSignInMutation } from '@/context/api'

export default function Login() {
  const router = useRouter()
  const [signIn, { isLoading, isSuccess, isError, error }] = useSignInMutation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }
  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function handleLogin(event) {
    signIn({
      email,
      password
    })
    event.preventDefault()
  }

  useEffect(() => {
    if (isSuccess) {
      router.replace('/')
    }
  }, [isSuccess])

  const [confirmSignUpModal, setConfirmSignUpModal] = useState(false)

  useEffect(() => {
    if (isError) {
      if (error.code === 'NotAuthorizedException') {
        // TODO: Handle wrong password
      } else if (error.code === 'UserNotConfirmedException') {
        setConfirmSignUpModal(true)
      }
    }
  }, [isError])

  return (
    <>
      <Header title="Secure Notes Pro - Login" />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <ShieldCheckIcon className="mx-auto w-auto h-12" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/register">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                Register now
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
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
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
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
