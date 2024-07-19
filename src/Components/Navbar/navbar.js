
import './navbar.css';
import logo from '../../Assets/logo.png'
import logo_cart from '../../Assets/cart_icon.png'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {ShopContext} from '../../Context/ShopContext'



const Navbar = () => {
// use state property is used here 
    const [menu,setMenu]=useState("Shop");
    const {getTotalCartItems} = useContext (ShopContext);
  return (
    <div className="navbar">
    <div className="nav_logo">
      <img src={logo} alt="" />
      <h1>SHOPPER</h1>
    </div>


{/* here the property use state is used onclick is is th function of usestate
onClick={()=>{setMenu("Shop")}}
{menu==="Shop"?<hr/>:<></>} */}




    <ul className="nav_menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration:'none'}} to='/' >Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{ textDecoration:'none'}} to='/Men' >Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{ textDecoration:'none'}} to='/Women' >Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{ textDecoration:'none'}} to='/Kids' >Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
    </ul>


    <div className="nav_login_cart">
      <Link to='/login'> <button >Login </button></Link> 

      
      <Link to='/Cart'>  <img src={logo_cart} alt="" /></Link> 
        <div className="nav_cart_count">{getTotalCartItems()}</div>
    </div>
  
    </div>
  )
}

export default Navbar
