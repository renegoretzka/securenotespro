import { API } from 'aws-amplify'
import { api } from './api'
import { listTeams } from '@/graphql/queries'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTeams: build.query({
      async queryFn() {
        try {
          const user = await API.graphql({
            query: listTeams
          })
          return {
            data: user.data.listTeams.items
          }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Teams']
    })
  }),
  overrideExisting: false
})

export const { useGetTeamsQuery } = userApi
