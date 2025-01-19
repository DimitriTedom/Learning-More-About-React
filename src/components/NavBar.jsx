import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="primary-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/products">Products</NavLink>
    </nav>
  )
}

export default NavBar;