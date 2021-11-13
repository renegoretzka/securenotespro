# Secure Notes Pro

This is a web application using the next.js and AWS Amplify.

For State Management Redux Toolkit has been used. Especially RTK Query comes into play to enable local caching and works as a API middleware.

## Getting Started

Firstly, install dependencies:

```bash
npm install
# or
yarn install
```

Secondly, set up resources on AWS (using the @aws-amplify/cli):

```bash
amplify init
```

```bash
amplify push
```

or click here:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/renegoretzka/securenotespro)

Thirdly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating a company and linking a user to it

- Go to AppSync console and run the GraphQL mutation `createCompany`.
- Copy the id of the created company from the response
- Update the field `companyID` of the user by running `updateUser` with the user id given.
- Create a AWS Cognito Group which has the name of the id from the created company.
- Add the user to the newly created Cognito Group
- (User needs to signout and sign in again, if he is already signed in or wait until the token expires to apply changes [Cognito Group saved into token])
