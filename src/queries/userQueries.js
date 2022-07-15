import { gql } from '@apollo/client';

const GET_USER = gql`
  query getuser {
    user {
      id
      name
      email
      phone
    }
  }
`;




export { GET_USER }