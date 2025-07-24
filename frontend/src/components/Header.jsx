import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Cart from './Cart'
import Auth from './Auth'

const Header = () => {
 const location = useLocation()
 const { getCartItemCount, setIsCartOpen } = useCart()
 const [isAuthOpen, setIsAuthOpen] = useState(false)

 return (
   <>
     <header className="header" style={{
       background: location.pathname === '/' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.95)',
       color: location.pathname === '/' ? 'white' : '#1d1d1f'
     }}>
       <div className="container">
         <Link to="/" className="logo" style={{
           color: '#dc2626',
           textDecoration: 'none'
         }}>
           VAIBHAV
         </Link>
         
         <nav className="nav">
           <Link to="/" style={{
             color: location.pathname === '/' ? 'white' : '#1d1d1f',
             textDecoration: 'none'
           }}>Services</Link>
           <Link to="/shop" style={{
             color: location.pathname === '/' ? 'white' : '#1d1d1f',
             textDecoration: 'none'
           }}>Shop</Link>
           <Link to="/contact" style={{
             color: location.pathname === '/' ? 'white' : '#1d1d1f',
             textDecoration: 'none'
           }}>Contact</Link>
           
           <button
             onClick={() => setIsCartOpen(true)}
             style={{
               background: 'none',
               border: 'none',
               color: location.pathname === '/' ? 'white' : '#1d1d1f',
               fontSize: '20px',
               cursor: 'pointer',
               position: 'relative',
               padding: '8px'
             }}
           >
             🛒
             {getCartItemCount() > 0 && (
               <span style={{
                 position: 'absolute',
                 top: '0',
                 right: '0',
                 background: '#dc2626',
                 color: 'white',
                 borderRadius: '50%',
                 width: '20px',
                 height: '20px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '12px',
                 fontWeight: 'bold'
               }}>
                 {getCartItemCount()}
               </span>
             )}
           </button>
           
           <button
             onClick={() => setIsAuthOpen(true)}
             className="btn"
             style={{
               background: '#dc2626',
               color: 'white',
               padding: '12px 24px',
               borderRadius: '8px',
               border: 'none',
               fontWeight: '600',
               cursor: 'pointer',
               fontSize: '14px',
               transition: 'all 0.3s ease'
             }}
             onMouseEnter={(e) => {
               e.target.style.background = '#b91c1c'
               e.target.style.transform = 'translateY(-2px)'
             }}
             onMouseLeave={(e) => {
               e.target.style.background = '#dc2626'
               e.target.style.transform = 'translateY(0)'
             }}
           >
             Login / Sign Up
           </button>
         </nav>
       </div>
     </header>
     
     <Cart />
     <Auth isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
   </>
 )
}

export default Header
