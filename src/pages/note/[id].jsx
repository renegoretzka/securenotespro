import { withSSRContext } from 'aws-amplify'

import Layout from '@/components/Layout'
import Note from '@/components/Note'

export default function EditNote() {
  return (
    <Layout title="Edit Note">
      <Note />
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
