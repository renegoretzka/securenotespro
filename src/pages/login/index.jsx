import Header from '@/components/Header'
import Navigation from '@/components/Header/Navigation'
import { useSignInMutation } from '@/context/api'

function Login() {
  const [signIn, { isLoading }] = useSignInMutation()
  return (
    <>
      <Navigation />
      <div>
        <p className="text-green-500">Please login</p>
        <div>
          <input placeholder="Your email" />
          <input placeholder="Your password" />
          <button
            className="btn bg-rose-500 text-white"
            onClick={() => {
              signIn({ username: 'test', password: 'test2' })
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
}
export default Login
