import { UserCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

export default function Note({
  note = undefined,
  onSubmit,
  submitButtonText,
  onDelete = undefined,
  editable = true
}) {
  const [content, setContent] = useState('')

  useEffect(() => {
    if (note) {
      setContent(note.content)
    }
  }, [note])

  function handleChangeContent(event) {
    setContent(event.target.value)
  }

  function handleSubmit(event) {
    onSubmit({ ...note, content })
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
      </div>
      <div className="absolute bottom-0 inset-x-px">
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
