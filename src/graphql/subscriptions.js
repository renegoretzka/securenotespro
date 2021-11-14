/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newNote = /* GraphQL */ `
  subscription NewNote($companyID: ID!) {
    newNote(companyID: $companyID) {
      id
      content
      authorID
      visibility
      companyID
      createdAt
      updatedAt
      author {
        id
        name
        companyID
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
        createdAt
        updatedAt
        members {
          nextToken
        }
        teams {
          nextToken
        }
      }
    }
  }
`;
export const updatedNote = /* GraphQL */ `
  subscription UpdatedNote($companyID: ID!) {
    updatedNote(companyID: $companyID) {
      id
      content
      authorID
      visibility
      companyID
      createdAt
      updatedAt
      author {
        id
        name
        companyID
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
        createdAt
        updatedAt
        members {
          nextToken
        }
        teams {
          nextToken
        }
      }
    }
  }
`;
export const deletedNote = /* GraphQL */ `
  subscription DeletedNote($companyID: ID!) {
    deletedNote(companyID: $companyID) {
      id
      content
      authorID
      visibility
      companyID
      createdAt
      updatedAt
      author {
        id
        name
        companyID
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
        createdAt
        updatedAt
        members {
          nextToken
        }
        teams {
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
      teams {
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
      teams {
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
      teams {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      companyID
      createdAt
      updatedAt
      company {
        id
        name
        createdAt
        updatedAt
        members {
          nextToken
        }
        teams {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      companyID
      createdAt
      updatedAt
      company {
        id
        name
        createdAt
        updatedAt
        members {
          nextToken
        }
        teams {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      companyID
      createdAt
      updatedAt
      company {
        id
        name
        createdAt
        updatedAt
        members {
          nextToken
        }
        teams {
          nextToken
        }
      }
    }
  }
`;
