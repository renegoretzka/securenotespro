/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      content
      authorID
      visibility
      companyID
      teamID
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
      team {
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
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        authorID
        visibility
        companyID
        teamID
        createdAt
        updatedAt
        author {
          id
          name
          companyID
          createdAt
          updatedAt
        }
        company {
          id
          name
          createdAt
          updatedAt
        }
        team {
          id
          name
          companyID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getNotesByCompany = /* GraphQL */ `
  query GetNotesByCompany(
    $companyID: ID
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getNotesByCompany(
      companyID: $companyID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        authorID
        visibility
        companyID
        teamID
        createdAt
        updatedAt
        author {
          id
          name
          companyID
          createdAt
          updatedAt
        }
        company {
          id
          name
          createdAt
          updatedAt
        }
        team {
          id
          name
          companyID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
