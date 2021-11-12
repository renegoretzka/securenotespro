import { API, Auth } from 'aws-amplify'
import { api } from './api'
import { getUser } from '@/graphql/queries'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAuthenticatedUser: build.query({
      async queryFn() {
        try {
          const res = await Auth.currentAuthenticatedUser()
          const user = await API.graphql({
            query: getUser,
            variables: {
              id: res.attributes.sub
            }
          })
          return {
            data: user.data.getUser
          }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['User']
    }),
    signIn: build.mutation({
      async queryFn({ email: username, password }) {
        try {
          const res = await Auth.signIn(username, password)
          return { data: res.attributes }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: ['User']
    }),
    signOut: build.mutation({
      async queryFn() {
        try {
          await Auth.signOut()
          return { data: 'success' }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: ['User', 'Notes']
    }),
    signUp: build.mutation({
      async queryFn({ email, password, fullname }) {
        try {
          const res = await Auth.signUp({
            username: email,
            password,
            attributes: {
              email,
              name: fullname
            }
          })
          console.log(res)
          return {
            data: res
          }
        } catch (error) {
          return { error }
        }
      }
    }),
    confirmSignUp: build.mutation({
      async queryFn({ email: username, code }) {
        try {
          const res = await Auth.confirmSignUp(username, code)
          return {
            data: res.attributes.sub
          }
        } catch (error) {
          return { error }
        }
      }
    })
  }),
  overrideExisting: false
})

export const {
  useGetAuthenticatedUserQuery,
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
  useConfirmSignUpMutation
} = userApi
