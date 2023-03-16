import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from 'context/StateContext';
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { data: session } = useSession()
  
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">E-Book Shop</Link>
      </p>
      <div onClick={!session ? signIn : signOut} className="hover-underline-animation">
        <p className='sign'>
          {session ? `Hello, ${session.user.name}` : "Sign In"}
        </p>
      </div>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
