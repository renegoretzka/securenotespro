/* Amplify Params - DO NOT EDIT
	API_SECURENOTESPRO_GRAPHQLAPIENDPOINTOUTPUT
	API_SECURENOTESPRO_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AppSyncClient = require('appsync-client').default
const gql = require('graphql-tag')
const config = {
  apiUrl: process.env.API_SECURENOTESPRO_GRAPHQLAPIENDPOINTOUTPUT
}
const client = new AppSyncClient(config)

const { createUser } = require('./graphql.js')

const initializeUser = async ({ id, name }) => {
  try {
    const { data } = await client.request({
      query: gql(createUser),
      variables: {
        id,
        name
      }
    })
    return data.createUser
  } catch (error) {
    console.log('Something went wrong in the initializeUser function: ', error)
  }
}

exports.handler = async (event, callback) => {
  try {
    await initializeUser({
      id: event.request.userAttributes.sub,
      name: event.request.userAttributes.name
    })
    callback.done(null, event)
  } catch (error) {
    console.log('Something went wrong in the handler:', error)
  }
}
