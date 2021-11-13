/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($authorID: String!) {
    onCreateNote(authorID: $authorID) {
      id
      content
      authorID
      companyID
      createdAt
      updatedAt
      author {
        id
        name
        companyID
        notes {
          nextToken
        }
        createdAt
        updatedAt
        company {
          id
          name
          createdAt
          updatedAt
        }
      }
      company {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
        members {
          nextToken
        }
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
      companyID
      createdAt
      updatedAt
      author {
        id
        name
        companyID
        notes {
          nextToken
        }
        createdAt
        updatedAt
        company {
          id
          name
          createdAt
          updatedAt
        }
      }
      company {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
        members {
          nextToken
        }
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
      companyID
      createdAt
      updatedAt
      author {
        id
        name
        companyID
        notes {
          nextToken
        }
        createdAt
        updatedAt
        company {
          id
          name
          createdAt
          updatedAt
        }
      }
      company {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
        members {
          nextToken
        }
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
      id
      name
      companyID
      notes {
        items {
          id
          content
          authorID
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      company {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
        members {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
      id
      name
      companyID
      notes {
        items {
          id
          content
          authorID
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      company {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
        members {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
      id
      name
      companyID
      notes {
        items {
          id
          content
          authorID
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      company {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
        members {
          nextToken
        }
      }
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      name
      notes {
        items {
          id
          content
          authorID
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      members {
        items {
          id
          name
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      name
      notes {
        items {
          id
          content
          authorID
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      members {
        items {
          id
          name
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      name
      notes {
        items {
          id
          content
          authorID
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      members {
        items {
          id
          name
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
