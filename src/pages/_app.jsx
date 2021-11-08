import { Provider } from 'react-redux'

import Amplify from 'aws-amplify'
import awsConfig from '../aws-exports'
Amplify.configure({ ...awsConfig, ssr: true })

import { store } from '@/context/store'

import 'tailwindcss/tailwind.css'
import Header from '@/components/Header'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="md:container md:mx-auto">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default App
