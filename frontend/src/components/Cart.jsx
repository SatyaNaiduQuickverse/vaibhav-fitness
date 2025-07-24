import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
 const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal, getCartItemCount } = useCart()
 const navigate = useNavigate()

 const handleCheckout = () => {
   setIsCartOpen(false)
   navigate('/checkout')
 }

 if (!isCartOpen) return null

 return (
   <div style={{
     position: 'fixed',
     top: 0,
     right: 0,
     width: '400px',
     height: '100vh',
     background: 'rgba(255, 255, 255, 0.95)',
     backdropFilter: 'blur(20px)',
     boxShadow: '-10px 0 30px rgba(0,0,0,0.2)',
     zIndex: 10000,
     transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
     transition: 'transform 0.3s ease',
     display: 'flex',
     flexDirection: 'column'
   }}>
     
     {/* Header */}
     <div style={{
       padding: '20px',
       borderBottom: '1px solid rgba(0,0,0,0.1)',
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center'
     }}>
       <h2 style={{fontSize: '24px', fontWeight: '700', color: '#1d1d1f', margin: 0}}>
         Cart ({getCartItemCount()})
       </h2>
       <button
         onClick={() => setIsCartOpen(false)}
         style={{
           background: 'none',
           border: 'none',
           fontSize: '24px',
           cursor: 'pointer',
           color: '#666',
           transition: 'color 0.3s ease'
         }}
       >
         ×
       </button>
     </div>

     {/* Items */}
     <div style={{
       flex: 1,
       padding: '20px',
       overflowY: 'auto'
     }}>
       {cartItems.length === 0 ? (
         <div style={{
           textAlign: 'center',
           padding: '40px 20px',
           color: '#666'
         }}>
           <div style={{fontSize: '48px', marginBottom: '16px'}}>🛒</div>
           <p>Your cart is empty</p>
         </div>
       ) : (
         cartItems.map(item => (
           <div key={item.id} style={{
             display: 'flex',
             gap: '12px',
             marginBottom: '16px',
             padding: '12px',
             background: '#f8f9fa',
             borderRadius: '12px'
           }}>
             <img
               src={item.image || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop'}
               alt={item.name}
               style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px'}}
             />
             <div style={{flex: 1}}>
               <h4 style={{fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0'}}>{item.name}</h4>
               <p style={{fontSize: '14px', color: '#666', margin: '0 0 8px 0'}}>₹{item.price}</p>
               <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                 <button
                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
                   style={{
                     width: '24px', height: '24px', borderRadius: '50%',
                     border: '1px solid #ddd', background: '#fff',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     cursor: 'pointer', fontSize: '12px'
                   }}
                 >
                   -
                 </button>
                 <span style={{fontSize: '14px', fontWeight: '600'}}>{item.quantity}</span>
                 <button
                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
                   style={{
                     width: '24px', height: '24px', borderRadius: '50%',
                     border: '1px solid #ddd', background: '#fff',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     cursor: 'pointer', fontSize: '12px'
                   }}
                 >
                   +
                 </button>
                 <button
                   onClick={() => removeFromCart(item.id)}
                   style={{
                     marginLeft: 'auto', background: 'none', border: 'none',
                     color: '#dc2626', cursor: 'pointer', fontSize: '16px'
                   }}
                 >
                   🗑️
                 </button>
               </div>
             </div>
           </div>
         ))
       )}
     </div>

     {/* Footer */}
     {cartItems.length > 0 && (
       <div style={{
         padding: '20px',
         borderTop: '1px solid rgba(0,0,0,0.1)',
         background: 'rgba(255,255,255,0.9)'
       }}>
         <div style={{
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
           marginBottom: '16px'
         }}>
           <span style={{fontSize: '18px', fontWeight: '600'}}>Total:</span>
           <span style={{fontSize: '20px', fontWeight: '700', color: '#dc2626'}}>
             ₹{getCartTotal().toLocaleString()}
           </span>
         </div>
         <button
           onClick={handleCheckout}
           style={{
             width: '100%',
             padding: '16px',
             background: '#dc2626',
             border: 'none',
             borderRadius: '12px',
             color: 'white',
             fontSize: '16px',
             fontWeight: '600',
             cursor: 'pointer',
             transition: 'background 0.3s ease'
           }}
         >
           Checkout
         </button>
       </div>
     )}
   </div>
 )
}

export default Cart
