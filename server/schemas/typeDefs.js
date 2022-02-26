const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: Int
        authors: String
        description: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User

    }

    input BookInput {
        author: String
        title: String
        description: String
        bookId: Int
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput!): User
        removeBook(bookId: Int!): User


    }

    type Auth {
        token: ID!
        user: User
      }

`;

module.exports = typeDefs