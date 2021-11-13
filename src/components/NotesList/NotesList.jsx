import NotePreview from '@/components/NotePreview'

export default function NotesList({ notes }) {
  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {notes?.map((note) => (
            <NotePreview key={note.id} note={note} />
          ))}
        </ul>
      </div>
    </>
  )
}
