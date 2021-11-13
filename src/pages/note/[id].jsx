import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { withSSRContext } from 'aws-amplify'

import Layout from '@/components/Layout'
import Note from '@/components/Note'

import { useGetNoteQuery, useUpdateNoteMutation } from '@/context/notes'

export default function EditNote() {
  const router = useRouter()
  const { id } = router.query
  const { data: note } = useGetNoteQuery(id)
  const [updateNote, { isSuccess }] = useUpdateNoteMutation()

  useEffect(() => {
    if (isSuccess) {
      router.push('/')
    }
  }, [isSuccess])

  return (
    <Layout title="Edit Note">
      <Note note={note} onSubmit={updateNote} submitButtonText="Update Note" />
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
