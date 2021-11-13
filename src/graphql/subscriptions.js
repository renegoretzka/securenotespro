/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($authorID: String!) {
    onCreateNote(authorID: $authorID) {
      id
      title
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
      title
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
      title
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
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
