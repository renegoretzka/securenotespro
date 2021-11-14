import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { withSSRContext } from 'aws-amplify'

import Layout from '@/components/Layout'
import Note from '@/components/Note'

import {
  useDeleteNoteMutation,
  useGetNoteQuery,
  useUpdateNoteMutation
} from '@/context/notes'
import { useGetAuthenticatedUserQuery } from '@/context/user'

export default function EditNote() {
  const router = useRouter()
  const { id } = router.query
  const { data: note } = useGetNoteQuery(id)
  const { data: user } = useGetAuthenticatedUserQuery()
  const [updateNote, { isSuccess }] = useUpdateNoteMutation()
  const [deleteNote, { isSuccess: deleteIsSucess }] = useDeleteNoteMutation()

  useEffect(() => {
    if (isSuccess || deleteIsSucess) {
      router.push('/')
    }
  }, [isSuccess, deleteIsSucess])

  return (
    <Layout title="Edit Note">
      <Note
        note={note}
        onSubmit={updateNote}
        submitButtonText="Update Note"
        onDelete={deleteNote}
        editable={user?.id === note?.authorID}
      />
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
