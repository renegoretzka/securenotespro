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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
