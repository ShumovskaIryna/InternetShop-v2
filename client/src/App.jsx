import React, {useState} from 'react';
import TopComponent from './components/TopComponent/TopComponent';
import Items from './components/Items/Items';
// import FullProduct from './components/Items/FullProduct/FullProduct';
import { useQuery, gql } from "@apollo/client"
import Navbar from './components/Navbar';

const GET_DATA = gql`
  query {
    categories {
      name,
      products {
        id,
        name,
        inStock,
        gallery,
        description,
        category,
        attributes {
          name,
          id,
          type,
          items{
            id,
            value,
            displayValue
          }
        },
        prices {
          amount,
          currency {
            label,
            symbol
          }
        },
        brand
      }
    }
  }
`

function App() {

const {error, data, loading} = useQuery(GET_DATA)
// const {category, setCategory} = useState('all')
console.log({ error, loading, data })

// const currentItems = data.categories.find((el) => el.name === category);

  return (
    <div className="wrapper">
      <Navbar/>
      <TopComponent
        allCategories={data?.categories}
        // changeCategory = {setCategory}
      />
      <Items
        items={data?.categories[0]?.products}
      />
      {/* <FullProduct
      /> */}
    </div>
  );
}

export default App;