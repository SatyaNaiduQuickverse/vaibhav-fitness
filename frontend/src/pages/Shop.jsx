import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import CartNotification from '../components/CartNotification'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState({ show: false, productName: '' })
  const [imageIndexes, setImageIndexes] = useState({})
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
    bestseller: [3, 7, 12, 18, 25, 31, 35, 38].includes(index),
    fastDelivery: [2, 6, 11, 16, 22, 28, 33, 37].includes(index),
    images: [
      productImages[index % productImages.length],
      productImages[(index + 2) % productImages.length],
      productImages[(index + 4) % productImages.length]
    ]
  }))

  useEffect(() => {
    const initialIndexes = {}
    products.forEach(product => {
      initialIndexes[product.id] = 0
    })
    setImageIndexes(initialIndexes)
  }, [])

  useEffect(() => {
    const intervals = []
    products.forEach((product, index) => {
      if (index % 4 === 0) {
        const interval = setInterval(() => {
          setImageIndexes(prev => ({
            ...prev,
            [product.id]: (prev[product.id] + 1) % product.images.length
          }))
        }, 3000 + Math.random() * 2000)
        intervals.push(interval)
      }
    })
    return () => intervals.forEach(clearInterval)
  }, [])

  const handleImageHover = (productId) => {
    setImageIndexes(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % 3
    }))
  }

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
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px'
        }}>
          
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)', 
              fontWeight: '700', 
              color: '#fff', 
              marginBottom: '12px',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
              Fitness Store
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 3vw, 21px)', 
              color: 'rgba(255,255,255,0.9)',
              fontWeight: '400'
            }}>
              Premium gear for your fitness journey.
            </p>
          </div>

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
                borderRadius: '12px',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(20px)',
                color: '#fff',
                outline: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            />
          </div>

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
                  background: selectedCategory === category.id 
                    ? 'rgba(255,255,255,0.9)' 
                    : 'rgba(255,255,255,0.2)',
                  color: selectedCategory === category.id ? '#1d1d1f' : '#fff',
                  border: `1px solid rgba(255,255,255,0.3)`,
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

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
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px)'
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
                  handleImageHover(product.id)
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: window.innerWidth > 768 ? '200px' : '140px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={product.images[imageIndexes[product.id] || 0]}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 0.5s ease'
                    }}
                  />
                  
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    {product.bestseller && (
                      <div style={{
                        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                        color: '#fff',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: '700',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                      }}>
                        🔥 Bestseller
                      </div>
                    )}
                    {product.fastDelivery && (
                      <div style={{
                        background: 'linear-gradient(135deg, #34d399, #10b981)',
                        color: '#fff',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: '700',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                      }}>
                        ⚡ 3-Day Delivery
                      </div>
                    )}
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '4px'
                  }}>
                    {product.images.map((_, index) => (
                      <div
                        key={index}
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: (imageIndexes[product.id] || 0) === index 
                            ? 'rgba(255,255,255,0.9)' 
                            : 'rgba(255,255,255,0.4)',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div style={{
                  padding: window.innerWidth > 768 ? '20px' : '16px'
                }}>
                  <h3 style={{
                    fontSize: window.innerWidth > 768 ? '17px' : '15px',
                    fontWeight: '600',
                    color: '#fff',
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}>
                    {product.name}
                  </h3>
                  
                  <div style={{
                    fontSize: window.innerWidth > 768 ? '19px' : '17px',
                    fontWeight: '700',
                    color: '#fff',
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
                      background: 'linear-gradient(135deg, #007aff, #0056b3)',
                      border: 'none',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: window.innerWidth > 768 ? '15px' : '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 16px rgba(0,122,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #0056b3, #003d82)'
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 8px 25px rgba(0,122,255,0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #007aff, #0056b3)'
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = '0 4px 16px rgba(0,122,255,0.3)'
                    }}
                  >
                    🛒 Add to Cart
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
