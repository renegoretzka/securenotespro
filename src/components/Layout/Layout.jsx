import { useRouter } from 'next/router'

import Header from '@/components/Header'
import ProfileNavigation from '@/components/ProfileNavigation'
import Navigation from '@/components/Navigation'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'

export default function Layout({ title, children }) {
  const router = useRouter()

  function handleNewNote() {
    router.push('/note/new')
  }

  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex">
                      <div className="-ml-2 mr-2 flex items-center md:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MenuIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex-shrink-0 flex items-center text-lg font-semibold text-white">
                        <svg
                          className="block h-8 w-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="hidden lg:block w-auto ml-2">
                          Secure Notes Pro
                        </p>
                      </div>
                      <Navigation />
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          onClick={handleNewNote}
                          className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                        >
                          <PlusSmIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span>New Note</span>
                        </button>
                      </div>
                      <ProfileNavigation />
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <Navigation mobile={true} />
                  <ProfileNavigation mobile={true} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Header title={`Secure Notes Pro - ${title}`} />
              <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
