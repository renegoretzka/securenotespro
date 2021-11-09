exports.createUser = /* GraphQL */ `
  mutation createUser($id: ID!, $name: String!) {
    createUser(input: { id: $id, name: $name }) {
      id
      name
    }
  }
`
