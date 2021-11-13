import { useEffect, useState } from 'react'

export default function Note({ note = undefined, onSubmit, submitButtonText }) {
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
          className="block w-full border-0 pt-2.5 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Write your note here..."
        />
      </div>
      <div className="border-t border-gray-200 px-2 py-2 flex justify-end items-center space-x-3 sm:px-3">
        <div className="flex">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </form>
  )
}
