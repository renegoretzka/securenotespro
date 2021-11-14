import { withSSRContext } from 'aws-amplify'

import EmptyNotes from '@/components/EmptyNotes'
import Layout from '@/components/Layout'
import NotesList from '@/components/NotesList'

import { useGetNotesQuery } from '@/context/notes'
import { useGetAuthenticatedUserQuery } from '@/context/user'
import { useGetTeamsQuery } from '@/context/team'

function Home() {
  const { data: user, isSuccess: isSuccessUser } =
    useGetAuthenticatedUserQuery()
  const { data: teams, isSuccess: isSuccessTeams } = useGetTeamsQuery()
  const { data: notes } = useGetNotesQuery(
    { companyID: user?.companyID },
    { skip: !isSuccessUser }
  )

  return (
    <>
      <Layout title="Notes">
        {notes?.length < 1 ? (
          <EmptyNotes />
        ) : (
          <NotesList
            notes={notes}
            teams={teams ? [user?.company, ...teams] : [user?.company]}
          />
        )}
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
