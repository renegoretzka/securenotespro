import { withSSRContext } from 'aws-amplify'

import Layout from '@/components/Layout'
import NotesList from '@/components/NotesList'

function Home() {
  return (
    <>
      <Layout title="Notes">
        <NotesList />
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
