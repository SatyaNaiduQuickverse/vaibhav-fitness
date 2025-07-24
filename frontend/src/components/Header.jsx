import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Cart from './Cart'
import Auth from './Auth'

const Header = () => {
 const location = useLocation()
 const { getCartItemCount, setIsCartOpen } = useCart()
 const [isAuthOpen, setIsAuthOpen] = useState(false)
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

 return (
   <>
     <header className="header" style={{
       background: location.pathname === '/' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.95)',
       color: location.pathname === '/' ? 'white' : '#1d1d1f',
       padding: '12px 0'
     }}>
       <div className="container" style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         padding: '0 16px'
       }}>
         <Link to="/" className="logo" style={{
           color: '#dc2626',
           textDecoration: 'none',
           fontSize: 'clamp(20px, 4vw, 28px)',
           fontWeight: '800'
         }}>
           VAIBHAV
         </Link>
         
         {/* Desktop Nav */}
         <nav className="nav" style={{
           display: window.innerWidth > 768 ? 'flex' : 'none',
           gap: '30px',
           alignItems: 'center'
         }}>
           <Link to="/" style={{
             color: location.pathname === '/' ? 'white' : '#1d1d1f',
             textDecoration: 'none',
             fontSize: '14px'
           }}>Services</Link>
           <Link to="/shop" style={{
             color: location.pathname === '/' ? 'white' : '#1d1d1f',
             textDecoration: 'none',
             fontSize: '14px'
           }}>Shop</Link>
           <Link to="/contact" style={{
             color: location.pathname === '/' ? 'white' : '#1d1d1f',
             textDecoration: 'none',
             fontSize: '14px'
           }}>Contact</Link>
           
           <button
             onClick={() => setIsCartOpen(true)}
             style={{
               background: 'none',
               border: 'none',
               color: location.pathname === '/' ? 'white' : '#1d1d1f',
               fontSize: '18px',
               cursor: 'pointer',
               position: 'relative',
               padding: '6px'
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
                 width: '16px',
                 height: '16px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '10px',
                 fontWeight: 'bold'
               }}>
                 {getCartItemCount()}
               </span>
             )}
           </button>
           
           <button
             onClick={() => setIsAuthOpen(true)}
             style={{
               background: '#dc2626',
               color: 'white',
               padding: '10px 20px',
               borderRadius: '6px',
               border: 'none',
               fontWeight: '600',
               cursor: 'pointer',
               fontSize: '12px'
             }}
           >
             Login
           </button>
         </nav>

         {/* Mobile Nav */}
         <div style={{
           display: window.innerWidth <= 768 ? 'flex' : 'none',
           alignItems: 'center',
           gap: '12px'
         }}>
           <button
             onClick={() => setIsCartOpen(true)}
             style={{
               background: 'none',
               border: 'none',
               color: location.pathname === '/' ? 'white' : '#1d1d1f',
               fontSize: '20px',
               cursor: 'pointer',
               position: 'relative',
               padding: '6px'
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
                 width: '16px',
                 height: '16px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 fontSize: '10px',
                 fontWeight: 'bold'
               }}>
                 {getCartItemCount()}
               </span>
             )}
           </button>
           
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             style={{
               background: 'none',
               border: 'none',
               color: location.pathname === '/' ? 'white' : '#1d1d1f',
               fontSize: '20px',
               cursor: 'pointer'
             }}
           >
             ☰
           </button>
         </div>
       </div>

       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div style={{
           position: 'absolute',
           top: '100%',
           left: 0,
           right: 0,
           background: 'rgba(0,0,0,0.95)',
           backdropFilter: 'blur(20px)',
           padding: '20px',
           zIndex: 999
         }}>
           <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
             <Link to="/" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}} 
               onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
             <Link to="/shop" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}
               onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
             <Link to="/contact" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}
               onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
             <button
               onClick={() => {setIsAuthOpen(true); setIsMobileMenuOpen(false)}}
               style={{
                 background: '#dc2626',
                 color: 'white',
                 padding: '12px',
                 borderRadius: '8px',
                 border: 'none',
                 fontWeight: '600',
                 fontSize: '14px',
                 cursor: 'pointer'
               }}
             >
               Login / Sign Up
             </button>
           </div>
         </div>
       )}
     </header>
     
     <Cart />
     <Auth isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
   </>
 )
}

export default Header
