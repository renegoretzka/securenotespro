import { API } from 'aws-amplify'
import { api } from './api'

import { listNotes } from '@/graphql/queries'

const notesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNotes: build.query({
      async queryFn(nextToken = undefined) {
        try {
          const query = {
            query: listNotes
          }
          if (nextToken) {
            query.variables.nextToken = nextToken
          }
          const notes = await API.graphql(query)
          return {
            data: notes.data.listNotes.items
          }
        } catch (error) {
          return { error }
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Notes', id })),
              { type: 'Notes', id: 'LIST' }
            ]
          : [{ type: 'Notes', id: 'LIST' }]
    })
  }),
  overrideExisting: false
})

export const { useGetNotesQuery } = notesApi
