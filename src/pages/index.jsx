import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useGetAuthenticatedUserQuery } from '@/context/api'

function Home() {
  const router = useRouter()
  const { data, isError: authError } = useGetAuthenticatedUserQuery()

  useEffect(() => {
    if (authError) {
      router.push('/login')
    }
  }, [authError])

  return <p>{data}</p>
}
export default Home
