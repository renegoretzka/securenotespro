import { Auth } from 'aws-amplify'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getAuthenticatedUser: build.query({
      async queryFn() {
        try {
          const res = await Auth.currentAuthenticatedUser()
          console.log(res)
        } catch (error) {
          return { error }
        }
      },
      tagTypes: ['User']
    }),
    signIn: build.mutation({
      async queryFn({ username, password }) {
        try {
          const res = await Auth.signIn(username, password)
          console.log(res)
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: ['User']
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
          return {
            data: res.user.userSub
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
            data: res.user.userSub
          }
        } catch (error) {
          return { error }
        }
      }
    })
  })
})

export const {
  useGetAuthenticatedUserQuery,
  useSignInMutation,
  useSignUpMutation,
  useConfirmSignUpMutation
} = api
