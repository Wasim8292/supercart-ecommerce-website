import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const [openMenu,setOpenMenu] = useState(false)

  const {getTotalCartItems} = useContext(ShopContext)

  const navigate = useNavigate()

  const isLoggedIn = localStorage.getItem("login")

  const handleLogout = () => {
    localStorage.removeItem("login")
    alert("Logout Successful")
    navigate("/login")
  }

  const handleCartClick = () => {
    if(isLoggedIn){
      navigate("/cart")
    }else{
      alert("Please Login First")
      navigate("/login")
    }
  }

  return (
    <div className='navbar'>

      {/* HAMBURGER */}
      <div className='hamburger' onClick={()=>setOpenMenu(!openMenu)}>
        ☰
      </div>

      {/* LOGO */}
      <div className='nav-logo'>
        <img src={logo} alt="" height="45px" />
        <p>SuperCart</p>
      </div>

      {/* MENU */}
      <ul className={openMenu ? "nav-menu active" : "nav-menu"}>

        <li onClick={() => { setMenu("home"); setOpenMenu(false) }}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("mens"); setOpenMenu(false) }}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("womens"); setOpenMenu(false) }}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("kids"); setOpenMenu(false) }}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>

      </ul>

      {/* LOGIN / CART */}
      <div className='nav-login-cart'>

        {!isLoggedIn && (
          <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Signup</button></Link>
          </>
        )}

        {isLoggedIn && (
          <button onClick={handleLogout}>Logout</button>
        )}

        <img 
          src={cart_icon} 
          alt="" 
          height="40px"
          style={{cursor:"pointer"}}
          onClick={handleCartClick}
        />

        <div className="nav-cart-count">{getTotalCartItems()}</div>

      </div>

    </div>
  )
}

export default Navbar