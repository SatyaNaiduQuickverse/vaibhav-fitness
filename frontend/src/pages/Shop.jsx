import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import CartNotification from '../components/CartNotification'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const [notification, setNotification] = useState({ show: false, productName: '' })
  const { addToCart } = useCart()

  const productImages = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1594787318286-3d835c1d4403?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop'
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
    rating: 4.2 + ((index * 17) % 8) / 10,
    reviews: 89 + (index * 7),
    category: ['supplements', 'equipment', 'apparel', 'accessories'][index % 4],
    bestseller: [3, 7, 12, 18, 25, 31].includes(index),
    fastDelivery: index % 3 === 0,
    image: productImages[index % productImages.length]
  }))

  useEffect(() => {
    const initialIndexes = {}
    products.forEach(product => {
      initialIndexes[product.id] = 0
    })
    setCurrentImageIndex(initialIndexes)
  }, [])

  useEffect(() => {
    const intervals = []
    products.forEach((product, index) => {
      if (index % 3 === 0) {
        const interval = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [product.id]: (prev[product.id] + 1) % productImages.length
          }))
        }, 8000 + Math.random() * 4000)
        intervals.push(interval)
      }
    })
    return () => intervals.forEach(clearInterval)
  }, [])

  const handleImageHover = (productId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % productImages.length
    }))
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    setNotification({ show: true, productName: product.name })
  }

  const categories = [
    {id: 'all', name: 'All Products', count: products.length},
    {id: 'supplements', name: 'Supplements', count: 8}, 
    {id: 'equipment', name: 'Equipment', count: 8},
    {id: 'apparel', name: 'Apparel', count: 8},
    {id: 'accessories', name: 'Accessories', count: 8}
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
        paddingTop: '100px', 
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
          
          <div style={{textAlign: 'center', marginBottom: '60px', padding: '40px 0'}}>
            <h1 style={{
              fontSize: '48px', 
              fontWeight: '600', 
              color: '#fff', 
              marginBottom: '16px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              Fitness Store
            </h1>
            <p style={{fontSize: '21px', color: '#f0f0f0', textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
              Premium gear for your fitness journey.
            </p>
          </div>

          <div style={{marginBottom: '40px', textAlign: 'center'}}>
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '500px',
                padding: '14px 20px',
                fontSize: '17px',
                border: 'none',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                color: '#fff',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '240px 1fr', gap: '40px'}}>
            
            <div style={{position: 'sticky', top: '120px', height: 'fit-content'}}>
              <div style={{
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(20px)', 
                borderRadius: '20px', 
                padding: '24px', 
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#fff', marginBottom: '20px'}}>
                  Categories
                </h3>
                {categories.map(category => (
                  <div
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{
                      padding: '10px 14px',
                      background: selectedCategory === category.id ? 'rgba(0,122,255,0.8)' : 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      marginBottom: '8px',
                      fontSize: '16px',
                      fontWeight: selectedCategory === category.id ? '600' : '400',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backdropFilter: 'blur(10px)',
                      border: selectedCategory === category.id ? '1px solid rgba(0,122,255,0.5)' : '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span>{category.name}</span>
                    <span style={{fontSize: '14px', opacity: 0.8}}>{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px'}}>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                    handleImageHover(product.id)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                  }}
                >
                  <div style={{position: 'absolute', top: '12px', left: '12px', zIndex: 3, display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    {product.bestseller && (
                      <div style={{
                        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
                      }}>
                        Bestseller
                      </div>
                    )}
                    {product.fastDelivery && (
                      <div style={{
                        background: 'rgba(52,211,153,0.9)',
                        backdropFilter: 'blur(10px)',
                        color: '#fff',
                        padding: '6px 10px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
                      }}>
                        <span>⚡</span>3-Day Delivery
                      </div>
                    )}
                  </div>

                  <div style={{position: 'relative', height: '220px', overflow: 'hidden'}}>
                    <img
                      src={productImages[currentImageIndex[product.id] || 0]}
                      alt={product.name}
                      loading="eager"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out',
                        transform: 'scale(1.02)'
                      }}
                    />
                    
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '6px'
                    }}>
                      {productImages.map((_, index) => (
                        <div
                          key={index}
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: (currentImageIndex[product.id] || 0) === index ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                            transition: 'all 0.5s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div style={{padding: '20px'}}>
                    <h4 style={{fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '8px', lineHeight: '1.3'}}>
                      {product.name}
                    </h4>
                    
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
                      <div style={{display: 'flex', gap: '2px'}}>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            style={{
                              color: i < Math.floor(product.rating) ? '#fbbf24' : 'rgba(255,255,255,0.3)',
                              fontSize: '14px'
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span style={{fontSize: '14px', color: 'rgba(255,255,255,0.8)'}}>
                        {product.rating.toFixed(1)} ({product.reviews})
                      </span>
                    </div>
                    
                    <div style={{fontSize: '20px', fontWeight: '600', color: '#fff', marginBottom: '16px'}}>
                      ₹{product.price.toLocaleString()}
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(product)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'rgba(0,122,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0,122,255,0.3)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 16px rgba(0,122,255,0.3)'
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
      </div>
    </>
  )
}

export default Shop
