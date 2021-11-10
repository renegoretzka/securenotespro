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
export default Home
