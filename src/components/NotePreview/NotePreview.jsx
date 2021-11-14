import Link from 'next/link'
import { CalendarIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/outline'

export default function NotePreview({ note, teams }) {
  if (teams.filter((team) => team.id === note.visibility).length === 0) null

  return (
    <li>
      <Link href={`/note/${note.id}`}>
        <a className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium text-indigo-600 mr-4 mb-2">
                {note.content.length < 160
                  ? note.content
                  : note.content.substring(0, 160) + '...'}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {note.author.name}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  <UserGroupIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {teams.filter((team) => team.id === note.visibility)[0].name}
                </p>
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-500 sm:mt-0">
                <CalendarIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <p>Last updated at {new Date(note.updatedAt).toDateString()}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}
