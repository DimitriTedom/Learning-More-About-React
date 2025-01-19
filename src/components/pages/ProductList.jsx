import { NavLink } from "react-router-dom"
const ProductList = () => {
  return (
    <div>
        <h2>List of Products</h2>

        <nav>
            <NavLink>Featured</NavLink> 
            <NavLink>New Arrivals</NavLink>
        </nav>
    </div>
  )
}

export default ProductList;