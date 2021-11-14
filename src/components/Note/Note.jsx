import { Fragment, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { UserCircleIcon, UserGroupIcon } from '@heroicons/react/outline'

export default function Note({
  note = undefined,
  visibilities,
  onSubmit,
  submitButtonText,
  onDelete = undefined,
  editable = true
}) {
  const tempVisibility = visibilities.findIndex(
    (visibility) => visibility.id === note?.visibility
  )
  const [assigned, setAssigned] = useState(
    tempVisibility > -1 ? visibilities[tempVisibility] : visibilities[0]
  )
  const [content, setContent] = useState(note.content ? note.content : '')

  function handleChangeContent(event) {
    setContent(event.target.value)
  }

  function handleSubmit(event) {
    onSubmit({ ...note, content, visibility: assigned.id })
    event.preventDefault()
  }
  function handleDelete(event) {
    onDelete({ id: note.id })
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="content" className="sr-only">
          Content
        </label>
        <textarea
          rows={8}
          name="content"
          value={content}
          onChange={handleChangeContent}
          id="content"
          className="block w-full border-0 pt-2.5 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm disabled:bg-indigo-600"
          placeholder="Write your note here..."
          disabled={!editable}
        />

        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">
        <div className="flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3">
          <Listbox
            as="div"
            value={assigned}
            onChange={setAssigned}
            className="flex-shrink-0"
          >
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">Assign</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3">
                    <UserGroupIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-300 sm:-ml-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-900 truncate sm:ml-2 sm:block">
                      {assigned?.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {visibilities.map((visibility) => (
                        <Listbox.Option
                          key={visibility.id}
                          className="bg-white cursor-default select-none relative py-2 px-3 hover:bg-gray-100"
                          value={visibility}
                        >
                          <div className="flex items-center">
                            <span className="ml-3 block font-medium truncate">
                              {visibility.name}
                            </span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        <div
          className={`border-t border-gray-200 px-2 py-2 flex items-center space-x-3 sm:px-3 ${
            note?.author?.name ? 'justify-between' : 'justify-end'
          }`}
        >
          {note?.author?.name ? (
            <div className="flex">
              <div className="flex items-center rounded-full bg-gray-50 px-2 py-1 hover:bg-gray-100 cursor-default">
                <UserCircleIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3 block text-gray-900 font-medium truncate">
                  {note?.author?.name}
                </span>
              </div>
            </div>
          ) : null}
          <div className="flex justify-self-end">
            {onDelete !== undefined ? (
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center px-4 py-2 mr-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 disabled:opacity-50"
                disabled={!editable}
              >
                Delete
              </button>
            ) : null}
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              disabled={!editable}
            >
              {submitButtonText}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
