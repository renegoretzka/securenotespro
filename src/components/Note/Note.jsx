import { useEffect, useState } from 'react'

import {
  useCreateNoteMutation,
  useGetNoteQuery,
  useUpdateNoteMutation
} from '@/context/notes'

export default function Note({ noteId = undefined }) {
  const {
    data: note,
    isLoading,
    isSuccess,
    isError
  } = useGetNoteQuery(noteId, { skip: noteId ? false : true })

  const [createNote, { isLoading: loadingCreate, isSuccess: successCreate }] =
    useCreateNoteMutation()
  const [updateNote, { isLoading: loadingUpdate, isSuccess: successUpdate }] =
    useUpdateNoteMutation()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (isSuccess) {
      setTitle(note?.title)
      setContent(note?.content)
    }
  }, [isSuccess, note])

  function handleChangeTitle(event) {
    setTitle(event.target.value)
  }
  function handleChangeContent(event) {
    setContent(event.target.value)
  }

  function handleCreateNote(event) {
    createNote({ title, content })
    event.preventDefault()
  }
  function handleUpdateNote(event) {
    updateNote({ id: note.id, title, content })
    event.preventDefault()
  }

  return (
    <form
      onSubmit={noteId ? handleUpdateNote : handleCreateNote}
      className="relative"
    >
      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
          placeholder="Title"
        />
        <label htmlFor="content" className="sr-only">
          Content
        </label>
        <textarea
          rows={8}
          name="content"
          value={content}
          onChange={handleChangeContent}
          id="content"
          className="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Write your note here..."
        />
      </div>
      <div className="border-t border-gray-200 px-2 py-2 flex justify-end items-center space-x-3 sm:px-3">
        <div className="flex">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {noteId ? 'Update' : 'Create'} Note
          </button>
        </div>
      </div>
    </form>
  )
}
