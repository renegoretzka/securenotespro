import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { withSSRContext } from 'aws-amplify'

import Layout from '@/components/Layout'
import Note from '@/components/Note'

import { useCreateNoteMutation } from '@/context/notes'
import { useGetAuthenticatedUserQuery } from '@/context/user'
import { useGetTeamsQuery } from '@/context/team'

export default function NewNote() {
  const router = useRouter()
  const [createNote, { isSuccess }] = useCreateNoteMutation()
  const { data: user, isSuccess: isSuccessUser } =
    useGetAuthenticatedUserQuery()
  const { data: teams, isSuccess: isSuccessTeams } = useGetTeamsQuery()

  useEffect(() => {
    if (isSuccess) {
      router.push('/')
    }
  }, [isSuccess])

  return (
    <Layout title="New Note">
      {isSuccessUser && isSuccessTeams ? (
        <Note
          note={{ companyID: user?.companyID }}
          visibilities={teams ? [user?.company, ...teams] : [user?.company]}
          onSubmit={createNote}
          submitButtonText="Create Note"
        />
      ) : null}
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { Auth } = withSSRContext({ req })
  try {
    await Auth.currentAuthenticatedUser()
    return {
      props: {}
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
}
