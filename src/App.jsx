import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from './Components/Footer/Footer'
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"

const App = () => {

  const isLoggedIn = localStorage.getItem("login");

  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>

          {/* LOGIN CHECK */}
          <Route path='/' element={isLoggedIn ? <Shop /> : <LoginSignup />} />

          <Route path='/mens' element={isLoggedIn ? 
            <ShopCategory banner={men_banner} category="men" /> : <LoginSignup />} />

          <Route path='/womens' element={isLoggedIn ? 
            <ShopCategory banner={women_banner} category="women" /> : <LoginSignup />} />

          <Route path='kids' element={isLoggedIn ? 
            <ShopCategory banner={kids_banner} category="kid" /> : <LoginSignup />} />

          <Route path="/product" element={isLoggedIn ? <Product /> : <LoginSignup />} />

          <Route path="/product/:productId" element={isLoggedIn ? <Product /> : <LoginSignup />} />

          <Route path="/cart" element={isLoggedIn ? <Cart /> : <LoginSignup />} />

          {/* OLD LOGIN ROUTE */}
          <Route path="/login" element={<LoginSignup />} />

          {/* NEW SIGNUP ROUTE */}
          <Route path="/signup" element={<LoginSignup />} />

        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App