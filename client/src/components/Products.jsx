import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Product from './Product';
import Categories from './Categories';

const GET_DATA = gql`
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
`;
const GET_CATEGORIES = gql`
  query myAwesomeQuery {
    categories {
      name
    }
  }
`;

const Products = () => {
  const [_, setCategoryInput] = useState('all');
  const { error, data, loading, refetch: refetchProducts } = useQuery(GET_DATA);
  const {
    error: errorCategories,
    data: dataCategories,
    loading: loadingCategories,
  } = useQuery(GET_CATEGORIES);

  console.log('Data', { error, loading, data, errorCategories, loadingCategories });

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <Categories
          allCategories={dataCategories?.categories}
          setCategory={setCategoryInput}
          refetchProducts={refetchProducts}
        />
        <div className="container">
          {data?.category?.products.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-3 py-1">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">{data ? <ShowProducts /> : <Loading />}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
