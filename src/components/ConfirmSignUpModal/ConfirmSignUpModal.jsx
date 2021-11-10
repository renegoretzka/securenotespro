import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Modal from '../Modal'
import { Dialog } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

import { useConfirmSignUpMutation } from '@/context/api'

export default function ConfirmSignUpModal({ email, show, setShow }) {
  const router = useRouter()

  const [confirmSignUp, { loading, isSuccess, isError, error }] =
    useConfirmSignUpMutation()
  const [code, setCode] = useState('')

  function handleChangeCode(event) {
    setCode(event.target.value)
  }

  function handleConfirmation(event) {
    confirmSignUp({ email, code })
    event.preventDefault()
  }

  useEffect(() => {
    if (isSuccess) {
      setShow(false)
      router.push('/login')
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      if (error === 'CodeMismatchException') {
        // TODO: Handle wrong confirmation code
      }
    }
  }, [isError])

  return (
    <Modal show={show} setShow={setShow}>
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-medium text-gray-900"
        >
          Please confirm your signup.
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            The confirmation code has been sent to your email.
          </p>
        </div>
        <form className="space-y-6 my-3" onSubmit={handleConfirmation}>
          <div>
            <div className="mt-1">
              <input
                id="code"
                name="code"
                value={code}
                onChange={handleChangeCode}
                type="number"
                placeholder="Enter code"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
