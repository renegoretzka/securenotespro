/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      companyID
      createdAt
      updatedAt
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
      company {
        id
        name
        createdAt
        updatedAt
        members {
          nextToken
        }
        notes {
          nextToken
        }
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      companyID
      createdAt
      updatedAt
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
      company {
        id
        name
        createdAt
        updatedAt
        members {
          nextToken
        }
        notes {
          nextToken
        }
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      companyID
      createdAt
      updatedAt
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
      company {
        id
        name
        createdAt
        updatedAt
        members {
          nextToken
        }
        notes {
          nextToken
        }
      }
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        notes {
          nextToken
        }
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
        notes {
          nextToken
        }
      }
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        notes {
          nextToken
        }
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
        notes {
          nextToken
        }
      }
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        notes {
          nextToken
        }
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
        notes {
          nextToken
        }
      }
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
    }
  }
`;
