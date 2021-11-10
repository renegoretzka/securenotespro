import Link from 'next/link'

export default function Navigation({ mobile = false }) {
  if (mobile) {
    return (
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link href="/">
          <a className="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 text-white">
            Dashboard
          </a>
        </Link>
      </div>
    )
  }

  return (
    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
      <Link href="/">
        <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
          Dashboard
        </a>
      </Link>
    </div>
  )
}
