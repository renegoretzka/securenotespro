/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($authorID: String!) {
    onCreateNote(authorID: $authorID) {
      id
      content
      authorID
      createdAt
      updatedAt
      author {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($authorID: String!) {
    onUpdateNote(authorID: $authorID) {
      id
      content
      authorID
      createdAt
      updatedAt
      author {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($authorID: String!) {
    onDeleteNote(authorID: $authorID) {
      id
      content
      authorID
      createdAt
      updatedAt
      author {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
