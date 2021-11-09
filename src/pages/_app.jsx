import { Provider } from 'react-redux'

import Amplify from 'aws-amplify'
import awsConfig from '../aws-exports'
Amplify.configure({ ...awsConfig, ssr: true })

import { store } from '@/context/store'

import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
