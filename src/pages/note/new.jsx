import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { withSSRContext } from 'aws-amplify'

import Layout from '@/components/Layout'
import Note from '@/components/Note'

import { useCreateNoteMutation } from '@/context/notes'

export default function NewNote() {
  const router = useRouter()
  const [createNote, { isSuccess }] = useCreateNoteMutation()

  useEffect(() => {
    if (isSuccess) {
      router.push('/')
    }
  }, [isSuccess])

  return (
    <Layout title="New Note">
      <Note onSubmit={createNote} submitButtonText="Create Note" />
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
