import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query user {
    _id
    username
    email
    orders {
      games {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($games: [ID]!) {
    checkout(games: $games) {
      session
    }
  }
`;

export const QUERY_GAMES = gql`
  query games {
    _id
    name
    description
    image
    price
  }
`;
