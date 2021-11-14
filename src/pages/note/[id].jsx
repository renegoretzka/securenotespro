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
import { useGetTeamsQuery } from '@/context/team'

export default function EditNote() {
  const router = useRouter()
  const { id } = router.query

  const { data: note, isSuccess: isSuccessNote } = useGetNoteQuery(id)
  const { data: user, isSuccess: isSuccessUser } =
    useGetAuthenticatedUserQuery()
  const { data: teams, isSuccess: isSuccessTeams } = useGetTeamsQuery()

  const [updateNote, { isSuccess: updateIsSuccess }] = useUpdateNoteMutation()
  const [deleteNote, { isSuccess: deleteIsSuccess }] = useDeleteNoteMutation()

  useEffect(() => {
    if (updateIsSuccess || deleteIsSuccess) {
      router.push('/')
    }
  }, [updateIsSuccess, deleteIsSuccess])

  return (
    <Layout title="Edit Note">
      {isSuccessNote && isSuccessUser && isSuccessTeams ? (
        <Note
          note={note}
          visibilities={teams ? [user?.company, ...teams] : [user?.company]}
          onSubmit={updateNote}
          submitButtonText="Update Note"
          onDelete={deleteNote}
          editable={user?.id === note?.authorID}
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
