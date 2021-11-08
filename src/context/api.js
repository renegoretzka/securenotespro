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
    })
  })
})

export const { useGetAuthenticatedUserQuery, useSignInMutation } = api
