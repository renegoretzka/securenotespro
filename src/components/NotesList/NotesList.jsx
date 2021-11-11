import { useEffect, useState } from 'react'

import EmptyNotes from '@/components/EmptyNotes'
import NotePreview from '@/components/NotePreview'

import { useGetNotesQuery } from '@/context/notes'

export default function NotesList() {
  const { data: notes, isLoading, isFetching, isError } = useGetNotesQuery()
  const [empty, setEmpty] = useState(true)

  useEffect(() => {
    if (notes?.length < 1) {
      setEmpty(true)
    }
  }, [notes])

  return (
    <>
      {empty ? (
        <EmptyNotes />
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {notes?.map((note) => (
              <NotePreview key={note.id} />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
