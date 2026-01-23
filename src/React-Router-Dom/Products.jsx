import React from 'react'
import { Link , Outlet} from 'react-router-dom'
Link
const Products = () => {
  return (
    <>
     <h1>All Products List</h1>
     <Link to={'mobiles'}> Mobiles </Link> ||
     <Link to={'laptops'}> Laptops </Link> ||
     <Outlet/>
    </>
  )
}

export default Products
