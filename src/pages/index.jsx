import { withSSRContext } from 'aws-amplify'

import EmptyNotes from '@/components/EmptyNotes'
import Layout from '@/components/Layout'
import NotesList from '@/components/NotesList'

import { useGetNotesQuery } from '@/context/notes'

function Home() {
  const { data: notes } = useGetNotesQuery()

  return (
    <>
      <Layout title="Notes">
        {notes?.length < 1 ? <EmptyNotes /> : <NotesList notes={notes} />}
      </Layout>
    </>
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

export default Home
