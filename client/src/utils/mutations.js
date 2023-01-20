import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    token
    user {
      _id
    }
  }
`;

export const ADD_ORDER = gql`
  mutation AddOrder($games: [ID!]) {
    addOrder(games: $games) {
      games {
        name
        price
        image
        quantity
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($user: [ID]!) {
    updateUser(user: $user) {
      firstName
      lastName
      email
      password
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation updateGame($game: [ID]!) {
    updateGame(game: $game) {
      name
      description
      image
      price
      quantity
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
