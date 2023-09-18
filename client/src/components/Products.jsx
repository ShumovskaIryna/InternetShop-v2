import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Product from './Product';
import Categories from './Categories';
import { QUERIES } from '../constants/costants';

const Products = () => {
  const [, setCategoryInput] = useState('all');
  const { error, data, loading, refetch: refetchProducts } = useQuery(QUERIES.GET_DATA);
  const {
    error: errorCategories,
    data: dataCategories,
    loading: loadingCategories,
  } = useQuery(QUERIES.GET_CATEGORIES);

  return (
    <div>
      <div className="container my-3 py-1">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            {loading ? (
              <>Loading...</>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
