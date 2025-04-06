import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">PRODUCT-APP</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={''}>HOME</Link></li>
      <li><Link to={'about'}>ABOUT</Link></li>
      <li><Link to={'products'}>PRODUCTS</Link></li>
      <li><Link to={'contact'}>CONTACT</Link></li>
      <li><Link to={'Signup'}>SIGN UP</Link></li>
    </ul>
  </div>
</div>
  )
}

export default navbar