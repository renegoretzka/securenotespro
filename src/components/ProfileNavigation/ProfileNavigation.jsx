import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/outline'

import { useGetAuthenticatedUserQuery, useSignOutMutation } from '@/context/api'

export default function ProfileNavigation({ mobile = false }) {
  const router = useRouter()
  const { data: user } = useGetAuthenticatedUserQuery()
  const [signOut, { isSuccess: logoutSuccess }] = useSignOutMutation()

  useEffect(() => {
    if (logoutSuccess) {
      router.replace('/login')
    }
  }, [logoutSuccess])

  if (mobile) {
    return (
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5 sm:px-6">
          <div className="flex-shrink-0">
            <UserCircleIcon className="h-8 w-8 rounded-full text-white" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">{user.name}</div>
          </div>
        </div>
        <div className="mt-3 px-2 space-y-1 sm:px-3">
          <a
            onClick={signOut}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
          >
            Sign Out
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
      <Menu as="div" className="ml-3 relative">
        <div className="flex">
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <UserCircleIcon className="h-8 w-8 rounded-full text-gray-400 hover:text-white" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <a
                onClick={signOut}
                className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
              >
                Sign Out
              </a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
