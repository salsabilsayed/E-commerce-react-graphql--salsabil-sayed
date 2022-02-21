import { gql } from "apollo-boost";

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
  query {
    category {
      name
      products {
        id
        name
        gallery
        inStock
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

const GET_PRODUCT = gql`
query GetProduct($id: String!){
    product(id:$id){
      name,
      description,
      gallery,
      attributes{
        id,
        name,
        type,
        items{
          value,
          id
        }
      }
      prices{
        amount,
        currency{
          symbol
        }
      }
    }
    }
    
  
`
export { GET_CATEGORIES, GET_CURRENCIES, GET_ALL_PRODUCTS,GET_PRODUCT };
