import { CalendarIcon, UsersIcon } from '@heroicons/react/solid'

const text =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

export default function NotePreview() {
  return (
    <li>
      <a href="#" className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-indigo-600 mr-4 mb-2">
              {text.length > 160 ? `${text.substring(0, 160)}...` : text}
            </p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                René Goretzka
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                <UsersIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Design
              </p>
            </div>
            <div className="mt-2 flex items-center text-xs text-gray-500 sm:mt-0">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <p>
                Last updated at{' '}
                <time dateTime="2020-01-14">January 14, 2020</time>
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}
