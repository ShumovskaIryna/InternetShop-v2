import React, {useState} from "react"
import { useQuery, gql } from "@apollo/client"
import Item from './Item';
import Categories from "./Categories"

const Products = () => {

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
const {error, data, loading} = useQuery(GET_DATA)
console.log({ error, loading, data })

const [filterData, setFilter] = useState(data)

const filterProduct = (cat) => {
    const updatedList = data?.categories[0]?.products.filter((x)=>x.category === cat)
    setFilter(updatedList)
}

const Loading = () => {
    return <>Loading...</>
}
const ShowProducts = () => {
    return <>
        <Categories allCategories={data?.categories}
        filterProduct={filterProduct}/>
        <div className="container">
            {data?.categories[0]?.products.map((el) => (
                <Item
                key={el.id}
                item={el}
                />
            ))}
        </div>
    </>
}
console.log('filterData', filterData)
    return (
        <div>
            <div className="container my-3 py-1">
                <div className="row justify-content-center">
                    <div className="col-12 mb-5">
                        {data ? <ShowProducts/> : <Loading/> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
