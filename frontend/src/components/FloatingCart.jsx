import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const FloatingCart = () => {
 const { cartItems, isCartOpen, setIsCartOpen, getCartItemCount, getCartTotal, updateQuantity } = useCart()
 const navigate = useNavigate()

 if (getCartItemCount() === 0) return null

 const subtotal = getCartTotal()
 const shipping = subtotal > 5000 ? 0 : 199
 const total = subtotal + shipping

 return (
   <>
     {/* Backdrop */}
     {isCartOpen && (
       <div
         onClick={() => setIsCartOpen(false)}
         style={{
           position: 'fixed',
           inset: 0,
           background: 'rgba(0,0,0,0.5)',
           backdropFilter: 'blur(4px)',
           zIndex: 998,
           transition: 'all 0.3s ease'
         }}
       />
     )}

     {/* Floating Cart Button */}
     <div
       onClick={() => setIsCartOpen(!isCartOpen)}
       style={{
         position: 'fixed',
         bottom: '30px',
         right: '30px',
         width: '70px',
         height: '70px',
         background: 'linear-gradient(135deg, #007aff, #0056b3)',
         borderRadius: '50%',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         cursor: 'pointer',
         boxShadow: '0 12px 40px rgba(0,122,255,0.4)',
         zIndex: 1000,
         transition: 'all 0.3s ease',
         transform: isCartOpen ? 'scale(1.1)' : 'scale(1)'
       }}
       onMouseEnter={(e) => {
         if (!isCartOpen) e.target.style.transform = 'scale(1.1)'
       }}
       onMouseLeave={(e) => {
         if (!isCartOpen) e.target.style.transform = 'scale(1)'
       }}
     >
       <span style={{ fontSize: '28px', color: '#fff' }}>🛒</span>
       <div style={{
         position: 'absolute',
         top: '-8px',
         right: '-8px',
         background: '#dc2626',
         color: '#fff',
         borderRadius: '50%',
         width: '28px',
         height: '28px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         fontSize: '14px',
         fontWeight: '700',
         boxShadow: '0 4px 12px rgba(220,38,38,0.4)'
       }}>
         {getCartItemCount()}
       </div>
     </div>

     {/* Expanded Cart Panel - Much Larger */}
     {isCartOpen && (
       <div style={{
         position: 'fixed',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         width: '600px',
         maxHeight: '80vh',
         background: 'rgba(255,255,255,0.98)',
         backdropFilter: 'blur(30px)',
         borderRadius: '24px',
         boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
         border: '1px solid rgba(255,255,255,0.3)',
         zIndex: 999,
         overflow: 'hidden',
         animation: 'cartSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
       }}>
         {/* Header */}
         <div style={{
           padding: '30px 30px 20px',
           borderBottom: '1px solid rgba(0,0,0,0.08)',
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center'
         }}>
           <div>
             <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1d1d1f', marginBottom: '4px' }}>
               Shopping Cart
             </h3>
             <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>
               {getCartItemCount()} {getCartItemCount() === 1 ? 'item' : 'items'}
             </p>
           </div>
           <button
             onClick={() => setIsCartOpen(false)}
             style={{
               background: 'rgba(0,0,0,0.05)',
               border: 'none',
               width: '40px',
               height: '40px',
               borderRadius: '50%',
               fontSize: '24px',
               cursor: 'pointer',
               color: '#666',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               transition: 'all 0.2s ease'
             }}
             onMouseEnter={(e) => {
               e.target.style.background = 'rgba(0,0,0,0.1)'
             }}
             onMouseLeave={(e) => {
               e.target.style.background = 'rgba(0,0,0,0.05)'
             }}
           >
             ×
           </button>
         </div>

         {/* Cart Items */}
         <div style={{
           maxHeight: '400px',
           overflowY: 'auto',
           padding: '20px 30px'
         }}>
           {cartItems.map(item => (
             <div key={item.id} style={{
               display: 'flex',
               alignItems: 'center',
               gap: '20px',
               padding: '20px 0',
               borderBottom: '1px solid rgba(0,0,0,0.05)'
             }}>
               <img
                 src={item.image || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop'}
                 alt={item.name}
                 style={{
                   width: '80px',
                   height: '80px',
                   objectFit: 'cover',
                   borderRadius: '12px',
                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                 }}
               />
               <div style={{ flex: 1 }}>
                 <h4 style={{
                   fontSize: '18px',
                   fontWeight: '600',
                   color: '#1d1d1f',
                   marginBottom: '8px',
                   lineHeight: '1.3'
                 }}>
                   {item.name}
                 </h4>
                 <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>
                   ₹{item.price.toLocaleString()} each
                 </p>
               </div>
               <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: '12px'
               }}>
                 <button
                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
                   style={{
                     width: '36px',
                     height: '36px',
                     borderRadius: '50%',
                     border: '2px solid #e5e7eb',
                     background: '#fff',
                     cursor: 'pointer',
                     fontSize: '18px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     transition: 'all 0.2s ease'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.borderColor = '#007aff'
                     e.target.style.color = '#007aff'
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.borderColor = '#e5e7eb'
                     e.target.style.color = '#000'
                   }}
                 >
                   -
                 </button>
                 <span style={{ 
                   fontSize: '18px', 
                   fontWeight: '600', 
                   minWidth: '30px', 
                   textAlign: 'center',
                   color: '#1d1d1f'
                 }}>
                   {item.quantity}
                 </span>
                 <button
                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
                   style={{
                     width: '36px',
                     height: '36px',
                     borderRadius: '50%',
                     border: '2px solid #e5e7eb',
                     background: '#fff',
                     cursor: 'pointer',
                     fontSize: '18px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     transition: 'all 0.2s ease'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.borderColor = '#007aff'
                     e.target.style.color = '#007aff'
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.borderColor = '#e5e7eb'
                     e.target.style.color = '#000'
                   }}
                 >
                   +
                 </button>
               </div>
               <div style={{ 
                 fontSize: '20px', 
                 fontWeight: '700', 
                 color: '#1d1d1f',
                 minWidth: '100px',
                 textAlign: 'right'
               }}>
                 ₹{(item.price * item.quantity).toLocaleString()}
               </div>
               <button
                 onClick={() => updateQuantity(item.id, 0)}
                 style={{
                   background: 'none',
                   border: 'none',
                   color: '#ff3b30',
                   cursor: 'pointer',
                   fontSize: '20px',
                   padding: '8px',
                   borderRadius: '8px',
                   transition: 'all 0.2s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.target.style.background = 'rgba(255,59,48,0.1)'
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.background = 'none'
                 }}
                 title="Remove item"
               >
                 🗑️
               </button>
             </div>
           ))}
         </div>

         {/* Footer */}
         <div style={{ 
           padding: '25px 30px 30px', 
           borderTop: '1px solid rgba(0,0,0,0.08)',
           background: 'rgba(248,250,252,0.8)'
         }}>
           {/* Order Summary */}
           <div style={{ marginBottom: '25px' }}>
             <div style={{
               display: 'flex',
               justifyContent: 'space-between',
               marginBottom: '8px'
             }}>
               <span style={{ fontSize: '16px', color: '#666' }}>Subtotal:</span>
               <span style={{ fontSize: '16px', fontWeight: '600' }}>₹{subtotal.toLocaleString()}</span>
             </div>
             <div style={{
               display: 'flex',
               justifyContent: 'space-between',
               marginBottom: '12px'
             }}>
               <span style={{ fontSize: '16px', color: '#666' }}>Shipping:</span>
               <span style={{ 
                 fontSize: '16px', 
                 fontWeight: '600',
                 color: shipping === 0 ? '#22c55e' : '#1d1d1f'
               }}>
                 {shipping === 0 ? 'FREE' : `₹${shipping}`}
               </span>
             </div>
             {shipping === 0 && (
               <p style={{
                 fontSize: '14px',
                 color: '#22c55e',
                 margin: '0 0 12px 0',
                 fontWeight: '500'
               }}>
                 🎉 You saved ₹199 on shipping!
               </p>
             )}
             <div style={{
               display: 'flex',
               justifyContent: 'space-between',
               paddingTop: '12px',
               borderTop: '1px solid rgba(0,0,0,0.1)'
             }}>
               <span style={{ fontSize: '20px', fontWeight: '700' }}>Total:</span>
               <span style={{ 
                 fontSize: '24px', 
                 fontWeight: '700', 
                 color: '#007aff'
               }}>
                 ₹{total.toLocaleString()}
               </span>
             </div>
           </div>

           {/* Action Buttons */}
           <div style={{ display: 'flex', gap: '15px' }}>
             <button
               onClick={() => {
                 setIsCartOpen(false)
                 navigate('/shop')
               }}
               style={{
                 flex: 1,
                 padding: '16px',
                 background: 'transparent',
                 border: '2px solid #007aff',
                 borderRadius: '12px',
                 color: '#007aff',
                 fontWeight: '600',
                 fontSize: '16px',
                 cursor: 'pointer',
                 transition: 'all 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.target.style.background = 'rgba(0,122,255,0.05)'
               }}
               onMouseLeave={(e) => {
                 e.target.style.background = 'transparent'
               }}
             >
               Continue Shopping
             </button>
             <button
               onClick={() => {
                 navigate('/checkout')
                 setIsCartOpen(false)
               }}
               style={{
                 flex: 1,
                 padding: '16px',
                 background: 'linear-gradient(135deg, #007aff, #0056b3)',
                 border: 'none',
                 borderRadius: '12px',
                 color: '#fff',
                 fontWeight: '600',
                 fontSize: '16px',
                 cursor: 'pointer',
                 boxShadow: '0 8px 25px rgba(0,122,255,0.3)',
                 transition: 'all 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.target.style.transform = 'translateY(-2px)'
                 e.target.style.boxShadow = '0 12px 35px rgba(0,122,255,0.4)'
               }}
               onMouseLeave={(e) => {
                 e.target.style.transform = 'translateY(0)'
                 e.target.style.boxShadow = '0 8px 25px rgba(0,122,255,0.3)'
               }}
             >
               🚀 Checkout
             </button>
           </div>
         </div>
       </div>
     )}

     <style>{`
       @keyframes cartSlideIn {
         from { 
           opacity: 0; 
           transform: translate(-50%, -50%) scale(0.8); 
         }
         to { 
           opacity: 1; 
           transform: translate(-50%, -50%) scale(1); 
         }
       }
     `}</style>
   </>
 )
}

export default FloatingCart
