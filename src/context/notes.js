import { API } from 'aws-amplify'
import { api } from './api'

import { getNote, getNotesByCompany } from '@/graphql/queries'
import { createNote, deleteNote, updateNote } from '@/graphql/mutations'
import { deletedNote, newNote, updatedNote } from '@/graphql/subscriptions'

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
      async onCacheEntryAdded(
        { companyID },
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        let subscriptionNewNote
        let subscriptionUpdatedNote
        let subscriptionDeletedNote
        try {
          await cacheDataLoaded
          subscriptionNewNote = API.graphql({
            query: newNote,
            variables: {
              companyID
            }
          }).subscribe({
            next: ({ value }) => {
              updateCachedData((draft) => {
                if (value.data.newNote) {
                  draft.unshift(value.data.newNote)
                }
              })
            }
          })
          subscriptionUpdatedNote = API.graphql({
            query: updatedNote,
            variables: {
              companyID
            }
          }).subscribe({
            next: ({ value }) => {
              updateCachedData((draft) => {
                const index = draft.findIndex(
                  (note) => note.id === value.data.updatedNote.id
                )
                if (index >= 0) {
                  draft.splice(index, 1)
                  draft.unshift(value.data.updatedNote)
                }
              })
            }
          })
          subscriptionDeletedNote = API.graphql({
            query: deletedNote,
            variables: {
              companyID
            }
          }).subscribe({
            next: ({ value }) => {
              updateCachedData((draft) => {
                const index = draft.findIndex(
                  (note) => note.id === value.data.deletedNote.id
                )
                if (index >= 0) {
                  draft.splice(index, 1)
                }
              })
            }
          })
        } catch {}
        await cacheEntryRemoved
        subscriptionNewNote.unsubscribe()
        subscriptionUpdatedNote.unsubscribe()
        subscriptionDeletedNote.unsubscribe()
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
      async queryFn({ title, content, companyID, visibility }) {
        try {
          const mutation = {
            query: createNote,
            variables: {
              input: {
                title,
                content,
                companyID,
                visibility
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
      async queryFn({ id, title, content, visibility }) {
        try {
          const mutation = {
            query: updateNote,
            variables: {
              input: {
                id,
                title,
                content,
                visibility
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
