import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartNotification from '../components/CartNotification'

const Shop = () => {
 const [selectedCategory, setSelectedCategory] = useState('all')
 const [searchTerm, setSearchTerm] = useState('')
 const [notification, setNotification] = useState({ show: false, productName: '' })
 const { addToCart } = useCart()

 const productImages = [
   'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
   'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop',
   'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
   'https://images.unsplash.com/photo-1594736797933-d0c6ab80ec1e?w=400&h=400&fit=crop',
   'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
   'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
   'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop'
 ]

 const baseProducts = [
   'Whey Protein', 'Pre-Workout', 'BCAA', 'Creatine', 'Mass Gainer', 'Fat Burner', 'Casein Protein', 'Glutamine',
   'Dumbbells', 'Barbell', 'Kettlebell', 'Resistance Bands', 'Pull-up Bar', 'Medicine Ball', 'Foam Roller', 'Yoga Mat',
   'Gym T-Shirt', 'Training Shorts', 'Tank Top', 'Compression Wear', 'Sports Bra', 'Training Shoes', 'Sweatshirt', 'Track Pants',
   'Protein Shaker', 'Gym Bag', 'Water Bottle', 'Gym Gloves', 'Weight Belt', 'Wrist Wraps', 'Knee Sleeves', 'Lifting Straps',
   'Protein Bar', 'Energy Drink', 'Vitamin D3', 'Magnesium', 'ZMA', 'Multivitamin', 'Fish Oil', 'CLA'
 ]

 const products = baseProducts.map((name, index) => ({
   id: index + 1,
   name: name,
   price: 999 + (index * 123),
   category: ['supplements', 'equipment', 'apparel', 'accessories'][index % 4],
   bestseller: [3, 7, 12, 18, 25, 31].includes(index),
   image: productImages[index % productImages.length]
 }))

 const categories = [
   {id: 'all', name: 'All Products'},
   {id: 'supplements', name: 'Supplements'}, 
   {id: 'equipment', name: 'Equipment'},
   {id: 'apparel', name: 'Apparel'},
   {id: 'accessories', name: 'Accessories'}
 ]

 const filteredProducts = products
   .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
   .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

 return (
   <>
     <CartNotification 
       show={notification.show} 
       productName={notification.productName}
       onClose={() => setNotification({ show: false, productName: '' })}
     />
     
     <div style={{
       minHeight: '100vh',
       background: '#f5f5f7',
       paddingTop: '80px'
     }}>
       <div style={{
         maxWidth: '1200px',
         margin: '0 auto',
         padding: '40px 20px'
       }}>
         
         {/* Header */}
         <div style={{textAlign: 'center', marginBottom: '40px'}}>
           <h1 style={{
             fontSize: 'clamp(32px, 5vw, 56px)', 
             fontWeight: '700', 
             color: '#1d1d1f', 
             marginBottom: '12px',
             letterSpacing: '-0.02em'
           }}>
             Fitness Store
           </h1>
           <p style={{
             fontSize: 'clamp(16px, 3vw, 21px)', 
             color: '#86868b',
             fontWeight: '400'
           }}>
             Premium gear for your fitness journey.
           </p>
         </div>

         {/* Search */}
         <div style={{textAlign: 'center', marginBottom: '32px'}}>
           <input
             type="text"
             placeholder="Search products"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             style={{
               width: 'min(500px, 90vw)',
               padding: '12px 16px',
               fontSize: '17px',
               borderRadius: '10px',
               border: '1px solid #d2d2d7',
               background: '#fff',
               color: '#1d1d1f',
               outline: 'none',
               transition: 'all 0.2s ease'
             }}
             onFocus={(e) => e.target.style.borderColor = '#007aff'}
             onBlur={(e) => e.target.style.borderColor = '#d2d2d7'}
           />
         </div>

         {/* Categories */}
         <div style={{
           display: 'flex',
           justifyContent: 'center',
           gap: '8px',
           marginBottom: '40px',
           overflowX: 'auto',
           paddingBottom: '8px'
         }}>
           {categories.map(category => (
             <button
               key={category.id}
               onClick={() => setSelectedCategory(category.id)}
               style={{
                 padding: '8px 16px',
                 background: selectedCategory === category.id ? '#007aff' : '#fff',
                 color: selectedCategory === category.id ? '#fff' : '#1d1d1f',
                 border: `1px solid ${selectedCategory === category.id ? '#007aff' : '#d2d2d7'}`,
                 borderRadius: '20px',
                 fontSize: '14px',
                 fontWeight: '500',
                 cursor: 'pointer',
                 transition: 'all 0.2s ease',
                 whiteSpace: 'nowrap'
               }}
               onMouseEnter={(e) => {
                 if (selectedCategory !== category.id) {
                   e.target.style.borderColor = '#007aff'
                   e.target.style.color = '#007aff'
                 }
               }}
               onMouseLeave={(e) => {
                 if (selectedCategory !== category.id) {
                   e.target.style.borderColor = '#d2d2d7'
                   e.target.style.color = '#1d1d1f'
                 }
               }}
             >
               {category.name}
             </button>
           ))}
         </div>

         {/* Products Grid - Fixed 4 columns on desktop */}
         <div style={{
           display: 'grid',
           gridTemplateColumns: window.innerWidth > 768 
             ? 'repeat(4, 1fr)' 
             : 'repeat(2, 1fr)',
           gap: window.innerWidth > 768 ? '24px' : '16px'
         }}>
           {filteredProducts.map(product => (
             <div
               key={product.id}
               style={{
                 background: '#fff',
                 borderRadius: '18px',
                 overflow: 'hidden',
                 boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                 transition: 'all 0.3s ease',
                 cursor: 'pointer'
               }}
               onMouseEnter={(e) => {
                 e.target.style.transform = 'translateY(-4px)'
                 e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)'
               }}
               onMouseLeave={(e) => {
                 e.target.style.transform = 'translateY(0)'
                 e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'
               }}
             >
               <div style={{
                 position: 'relative',
                 height: window.innerWidth > 768 ? '200px' : '140px',
                 background: '#f5f5f7'
               }}>
                 <img
                   src={product.image}
                   alt={product.name}
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover'
                   }}
                 />
                 {product.bestseller && (
                   <div style={{
                     position: 'absolute',
                     top: '12px',
                     right: '12px',
                     background: '#ff3b30',
                     color: '#fff',
                     padding: '4px 8px',
                     borderRadius: '12px',
                     fontSize: '11px',
                     fontWeight: '600'
                   }}>
                     Bestseller
                   </div>
                 )}
               </div>
               
               <div style={{
                 padding: window.innerWidth > 768 ? '20px' : '16px'
               }}>
                 <h3 style={{
                   fontSize: window.innerWidth > 768 ? '17px' : '15px',
                   fontWeight: '600',
                   color: '#1d1d1f',
                   marginBottom: '8px',
                   lineHeight: '1.3'
                 }}>
                   {product.name}
                 </h3>
                 
                 <div style={{
                   fontSize: window.innerWidth > 768 ? '19px' : '17px',
                   fontWeight: '700',
                   color: '#1d1d1f',
                   marginBottom: '16px'
                 }}>
                   ₹{product.price.toLocaleString()}
                 </div>
                 
                 <button
                   onClick={() => {
                     addToCart(product)
                     setNotification({ show: true, productName: product.name })
                   }}
                   style={{
                     width: '100%',
                     padding: window.innerWidth > 768 ? '12px' : '10px',
                     background: '#007aff',
                     border: 'none',
                     borderRadius: '10px',
                     color: '#fff',
                     fontSize: window.innerWidth > 768 ? '15px' : '13px',
                     fontWeight: '600',
                     cursor: 'pointer',
                     transition: 'all 0.2s ease'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.background = '#0056b3'
                     e.target.style.transform = 'scale(1.02)'
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.background = '#007aff'
                     e.target.style.transform = 'scale(1)'
                   }}
                 >
                   Add to Cart
                 </button>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
   </>
 )
}

export default Shop
