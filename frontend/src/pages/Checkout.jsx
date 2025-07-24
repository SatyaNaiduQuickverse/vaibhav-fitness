import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
 const { cartItems, getCartTotal, getCartItemCount, clearCart } = useCart()
 const navigate = useNavigate()
 const [orderPlaced, setOrderPlaced] = useState(false)
 const [finalOrderTotal, setFinalOrderTotal] = useState(0)
 
 const [formData, setFormData] = useState({
   firstName: '', lastName: '', email: '', phone: '',
   address: '', city: '', state: '', pincode: '', country: 'India',
   paymentMethod: 'cod', cardNumber: '', expiryDate: '', cvv: '', cardName: ''
 })

 const subtotal = getCartTotal()
 const shipping = subtotal > 5000 ? 0 : 199
 const packaging = 49
 const tax = Math.round(subtotal * 0.18)
 const total = subtotal + shipping + packaging + tax

 useEffect(() => {
   if (!orderPlaced) setFinalOrderTotal(total)
 }, [total, orderPlaced])

 const handleInputChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value })
 }

 const handleSubmit = (e) => {
   e.preventDefault()
   setFinalOrderTotal(total)
   setOrderPlaced(true)
   clearCart()
   setTimeout(() => navigate('/'), 3000)
 }

 if (cartItems.length === 0 && !orderPlaced) {
   navigate('/shop')
   return null
 }

 if (orderPlaced) {
   return (
     <div style={{
       paddingTop: '80px', 
       minHeight: '100vh',
       background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop")',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       display: 'flex', 
       alignItems: 'center', 
       justifyContent: 'center',
       padding: '20px'
     }}>
       <div style={{
         background: 'rgba(255,255,255,0.95)', 
         backdropFilter: 'blur(20px)',
         borderRadius: '20px', 
         padding: 'clamp(30px, 5vw, 60px)', 
         textAlign: 'center',
         boxShadow: '0 30px 80px rgba(0,0,0,0.2)', 
         maxWidth: '500px',
         width: '100%'
       }}>
         <div style={{fontSize: 'clamp(60px, 10vw, 80px)', marginBottom: '16px'}}>🎉</div>
         <h1 style={{fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700', color: '#22c55e', marginBottom: '12px'}}>
           Order Placed Successfully!
         </h1>
         <p style={{fontSize: 'clamp(14px, 3vw, 18px)', color: '#666', marginBottom: '24px'}}>
           Thank you for your purchase. Your order will be delivered within 3-5 business days.
         </p>
         <div style={{background: '#f8f9fa', borderRadius: '10px', padding: '16px', marginBottom: '24px'}}>
           <p style={{fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: '700', color: '#1d1d1f'}}>
             Order Total: ₹{finalOrderTotal.toLocaleString()}
           </p>
         </div>
       </div>
     </div>
   )
 }

 const deliveryDate = new Date()
 deliveryDate.setDate(deliveryDate.getDate() + 3)

 return (
   <div style={{
     paddingTop: '80px', 
     minHeight: '100vh',
     background: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop")',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     padding: '80px 16px 40px'
   }}>
     <div style={{maxWidth: '1200px', margin: '0 auto'}}>
       
       <div style={{textAlign: 'center', marginBottom: '40px'}}>
         <h1 style={{fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: '700', color: '#1d1d1f', marginBottom: '12px'}}>
           Checkout
         </h1>
         <p style={{fontSize: 'clamp(14px, 3vw, 18px)', color: '#666'}}>
           Complete your order details below
         </p>
       </div>

       <div style={{
         display: 'grid', 
         gridTemplateColumns: window.innerWidth > 768 ? '2fr 1fr' : '1fr', 
         gap: '30px'
       }}>
         
         {/* Form Section */}
         <div style={{
           background: 'rgba(255,255,255,0.95)', 
           backdropFilter: 'blur(20px)',
           borderRadius: '20px', 
           padding: 'clamp(20px, 4vw, 40px)', 
           border: '1px solid rgba(0,0,0,0.1)',
           boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
         }}>
           <form onSubmit={handleSubmit}>
             
             {/* Personal Information */}
             <div style={{marginBottom: '30px'}}>
               <h2 style={{fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '600', color: '#1d1d1f', marginBottom: '20px'}}>
                 Personal Information
               </h2>
               
               <div style={{display: 'grid', gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr', gap: '12px', marginBottom: '12px'}}>
                 <input
                   type="text" name="firstName" placeholder="First Name" value={formData.firstName}
                   onChange={handleInputChange} required
                   style={{
                     padding: '12px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                     fontSize: '14px', background: '#fff', color: '#1d1d1f'
                   }}
                 />
                 <input
                   type="text" name="lastName" placeholder="Last Name" value={formData.lastName}
                   onChange={handleInputChange} required
                   style={{
                     padding: '12px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                     fontSize: '14px', background: '#fff', color: '#1d1d1f'
                   }}
                 />
               </div>
               <div style={{display: 'grid', gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr', gap: '12px'}}>
                 <input
                   type="email" name="email" placeholder="Email" value={formData.email}
                   onChange={handleInputChange} required
                   style={{
                     padding: '12px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                     fontSize: '14px', background: '#fff', color: '#1d1d1f'
                   }}
                 />
                 <input
                   type="tel" name="phone" placeholder="Phone" value={formData.phone}
                   onChange={handleInputChange} required
                   style={{
                     padding: '12px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                     fontSize: '14px', background: '#fff', color: '#1d1d1f'
                   }}
                 />
               </div>
             </div>

             {/* Shipping Address */}
             <div style={{marginBottom: '30px'}}>
               <h2 style={{fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '600', color: '#1d1d1f', marginBottom: '20px'}}>
                 Shipping Address
               </h2>
               
               <input
                 type="text" name="address" placeholder="Address" value={formData.address}
                 onChange={handleInputChange} required
                 style={{
                   width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                   fontSize: '14px', marginBottom: '12px', background: '#fff', color: '#1d1d1f'
                 }}
               />
               <div style={{display: 'grid', gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr', gap: '12px'}}>
                 <input
                   type="text" name="city" placeholder="City" value={formData.city}
                   onChange={handleInputChange} required
                   style={{
                     padding: '12px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                     fontSize: '14px', background: '#fff', color: '#1d1d1f'
                   }}
                 />
                 <input
                   type="text" name="pincode" placeholder="PIN Code" value={formData.pincode}
                   onChange={handleInputChange} required
                   style={{
                     padding: '12px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                     fontSize: '14px', background: '#fff', color: '#1d1d1f'
                   }}
                 />
               </div>
             </div>

             {/* Payment Method */}
             <div style={{marginBottom: '30px'}}>
               <h2 style={{fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '600', color: '#1d1d1f', marginBottom: '20px'}}>
                 Payment Method
               </h2>
               
               <div style={{display: 'grid', gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr', gap: '12px'}}>
                 <label style={{
                   display: 'flex', alignItems: 'center', padding: '12px', cursor: 'pointer',
                   border: `2px solid ${formData.paymentMethod === 'cod' ? '#007aff' : '#e5e7eb'}`,
                   borderRadius: '8px', background: formData.paymentMethod === 'cod' ? '#f0f8ff' : '#fff'
                 }}>
                   <input
                     type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'}
                     onChange={handleInputChange} style={{marginRight: '8px'}}
                   />
                   <span style={{fontSize: '14px', fontWeight: '600'}}>💰 Cash on Delivery</span>
                 </label>
                 
                 <label style={{
                   display: 'flex', alignItems: 'center', padding: '12px', cursor: 'pointer',
                   border: `2px solid ${formData.paymentMethod === 'card' ? '#007aff' : '#e5e7eb'}`,
                   borderRadius: '8px', background: formData.paymentMethod === 'card' ? '#f0f8ff' : '#fff'
                 }}>
                   <input
                     type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'}
                     onChange={handleInputChange} style={{marginRight: '8px'}}
                   />
                   <span style={{fontSize: '14px', fontWeight: '600'}}>💳 Card Payment</span>
                 </label>
               </div>
             </div>

             <button
               type="submit"
               style={{
                 width: '100%', padding: '16px', background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
                 border: 'none', borderRadius: '10px', color: '#fff', fontSize: '16px', fontWeight: '700',
                 cursor: 'pointer', boxShadow: '0 10px 30px rgba(34,197,94,0.4)'
               }}
             >
               🚀 Place Order - ₹{total.toLocaleString()}
             </button>
           </form>
         </div>

         {/* Order Summary - Hidden on mobile, shown on desktop */}
         {window.innerWidth > 768 && (
           <div style={{
             background: 'rgba(255,255,255,0.95)', 
             backdropFilter: 'blur(20px)',
             borderRadius: '20px', 
             padding: '30px', 
             height: 'fit-content',
             position: 'sticky',
             top: '100px'
           }}>
             <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Order Summary</h2>
             
             <div style={{marginBottom: '20px'}}>
               <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '12px'}}>
                 Items ({getCartItemCount()})
               </h3>
               {cartItems.slice(0, 3).map(item => (
                 <div key={item.id} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                   <img src={item.image} alt={item.name} style={{width: '40px', height: '40px', borderRadius: '6px'}}/>
                   <div style={{flex: 1, fontSize: '12px'}}>
                     <div style={{fontWeight: '600'}}>{item.name}</div>
                     <div>Qty: {item.quantity} × ₹{item.price.toLocaleString()}</div>
                   </div>
                 </div>
               ))}
               {cartItems.length > 3 && <p style={{fontSize: '12px', color: '#666'}}>+{cartItems.length - 3} more items</p>}
             </div>
             
             <div style={{borderTop: '1px solid #f0f0f0', paddingTop: '16px'}}>
               <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                 <span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                 <span>Shipping</span><span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px', paddingTop: '8px', borderTop: '1px solid #f0f0f0'}}>
                 <span style={{fontWeight: '700'}}>Total</span>
                 <span style={{fontWeight: '700', color: '#007aff'}}>₹{total.toLocaleString()}</span>
               </div>
             </div>
           </div>
         )}
       </div>
     </div>
   </div>
 )
}

export default Checkout
