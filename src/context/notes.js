import { API } from 'aws-amplify'
import { api } from './api'

import { getNote, getNotesByCompany } from '@/graphql/queries'
import { createNote, deleteNote, updateNote } from '@/graphql/mutations'

const notesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNotes: build.query({
      async queryFn({ companyID, nextToken = undefined }) {
        try {
          const query = {
            query: getNotesByCompany,
            variables: {
              companyID,
              sortDirection: 'DESC'
            }
          }
          if (nextToken) {
            query.variables.nextToken = nextToken
          }
          const notes = await API.graphql(query)
          return {
            data: notes.data.getNotesByCompany.items
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
    }),
    getNote: build.query({
      async queryFn(id) {
        try {
          const query = {
            query: getNote,
            variables: {
              id
            }
          }
          const note = await API.graphql(query)
          return {
            data: note.data.getNote
          }
        } catch (error) {
          return { error }
        }
      },
      providesTags: (result, error, id) => [{ type: 'Notes', id }]
    }),
    createNote: build.mutation({
      async queryFn({ title, content, companyID }) {
        try {
          const mutation = {
            query: createNote,
            variables: {
              input: {
                title,
                content,
                companyID
              }
            }
          }
          const note = await API.graphql(mutation)
          return {
            data: note.data.createNote
          }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: [{ type: 'Notes', id: 'LIST' }]
    }),
    updateNote: build.mutation({
      async queryFn({ id, title, content }) {
        try {
          const mutation = {
            query: updateNote,
            variables: {
              input: {
                id,
                title,
                content
              }
            }
          }
          const note = await API.graphql(mutation)
          return {
            data: note.data.updateNote
          }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Notes', id }]
    }),
    deleteNote: build.mutation({
      async queryFn({ id }) {
        try {
          const mutation = {
            query: deleteNote,
            variables: {
              input: {
                id
              }
            }
          }
          const note = await API.graphql(mutation)
          return {
            data: note.data.deleteNote
          }
        } catch (error) {
          return { error }
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Notes', id }]
    })
  }),
  overrideExisting: false
})

export const {
  useGetNoteQuery,
  useGetNotesQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation
} = notesApi
