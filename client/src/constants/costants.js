import { gql } from '@apollo/client';

const QUERIES = {
    GET_DATA: gql`
    query myQuery($categoryInput: CategoryInput) {
      category(input: $categoryInput) {
        name
        products {
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            name
            id
            type
            items {
              id
              value
              displayValue
            }
          }
          prices {
            amount
            currency {
              label
              symbol
            }
          }
          brand
        }
      }
    }
  `,
  GET_CATEGORIES: gql`
    query myAwesomeQuery {
      categories {
        name
      }
    }
  `,
  GET_PRODUCT_BY_ID:  gql`
    query myQuery($id: String!) {
        product(id: $id) {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
            name
            id
            type
            items {
            id
            value
            displayValue
            }
        }
        prices {
            amount
            currency {
            label
            symbol
            }
        }
        brand
        }
    }
    `
};

export { QUERIES };