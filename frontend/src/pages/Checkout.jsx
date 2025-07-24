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

  // Calculate totals
  const subtotal = getCartTotal()
  const shipping = subtotal > 5000 ? 0 : 199
  const packaging = 49
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + packaging + tax

  // Store the final total when order is placed
  useEffect(() => {
    if (!orderPlaced) {
      setFinalOrderTotal(total)
    }
  }, [total, orderPlaced])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Store the current total before clearing cart
    setFinalOrderTotal(total)
    setOrderPlaced(true)
    clearCart()
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  if (cartItems.length === 0 && !orderPlaced) {
    navigate('/shop')
    return null
  }

  if (orderPlaced) {
    return (
      <div style={{
        paddingTop: '100px', 
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.95)', 
          backdropFilter: 'blur(20px)',
          borderRadius: '24px', 
          padding: '60px', 
          textAlign: 'center',
          boxShadow: '0 30px 80px rgba(0,0,0,0.2)', 
          maxWidth: '500px',
          border: '1px solid rgba(0,0,0,0.1)'
        }}>
          <div style={{fontSize: '80px', marginBottom: '20px'}}>🎉</div>
          <h1 style={{fontSize: '32px', fontWeight: '700', color: '#22c55e', marginBottom: '16px'}}>
            Order Placed Successfully!
          </h1>
          <p style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
            Thank you for your purchase. Your order will be delivered within 3-5 business days.
          </p>
          <div style={{background: '#f8f9fa', borderRadius: '10px', padding: '20px', marginBottom: '30px'}}>
            <p style={{fontSize: '20px', fontWeight: '700', color: '#1d1d1f'}}>
              Order Total: ₹{finalOrderTotal.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + 3)
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div style={{
      paddingTop: '100px', 
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{maxWidth: '1500px', margin: '0 auto', padding: '0 20px'}}>
        
        <div style={{textAlign: 'center', marginBottom: '60px', padding: '40px 0'}}>
          <h1 style={{
            fontSize: '48px', 
            fontWeight: '700', 
            color: '#1d1d1f', 
            marginBottom: '16px'
          }}>
            Checkout
          </h1>
          <p style={{fontSize: '21px', color: '#666'}}>
            Complete your order details below
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px'}}>
          
          {/* Form Section */}
          <div style={{
            background: 'rgba(255,255,255,0.95)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '24px', 
            padding: '50px', 
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }}>
            <form onSubmit={handleSubmit}>
              
              {/* Personal Information */}
              <div style={{marginBottom: '50px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #007aff, #0056b3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginRight: '20px', color: '#fff', fontSize: '20px'
                  }}>
                    👤
                  </div>
                  <h2 style={{fontSize: '28px', fontWeight: '600', color: '#1d1d1f', margin: 0}}>
                    Personal Information
                  </h2>
                </div>
                
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px'}}>
                  <input
                    type="text" name="firstName" placeholder="First Name" value={formData.firstName}
                    onChange={handleInputChange} required
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                      fontSize: '16px', background: '#fff', color: '#1d1d1f',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#007aff'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <input
                    type="text" name="lastName" placeholder="Last Name" value={formData.lastName}
                    onChange={handleInputChange} required
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                      fontSize: '16px', background: '#fff', color: '#1d1d1f',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#007aff'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <input
                    type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
                    onChange={handleInputChange} required
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                      fontSize: '16px', background: '#fff', color: '#1d1d1f',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#007aff'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <input
                  type="email" name="email" placeholder="Email Address" value={formData.email}
                  onChange={handleInputChange} required
                  style={{
                    width: '100%', padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                    fontSize: '16px', background: '#fff', color: '#1d1d1f',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#007aff'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              {/* Shipping Address */}
              <div style={{marginBottom: '50px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginRight: '20px', color: '#fff', fontSize: '20px'
                  }}>
                    🏠
                  </div>
                  <h2 style={{fontSize: '28px', fontWeight: '600', color: '#1d1d1f', margin: 0}}>
                    Shipping Address
                  </h2>
                </div>
                
                <input
                  type="text" name="address" placeholder="Street Address, Building, Apartment" value={formData.address}
                  onChange={handleInputChange} required
                  style={{
                    width: '100%', padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                    fontSize: '16px', marginBottom: '20px', background: '#fff', color: '#1d1d1f',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10b981'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px'}}>
                  <input
                    type="text" name="city" placeholder="City" value={formData.city}
                    onChange={handleInputChange} required
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                      fontSize: '16px', background: '#fff', color: '#1d1d1f',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <input
                    type="text" name="state" placeholder="State" value={formData.state}
                    onChange={handleInputChange} required
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                      fontSize: '16px', background: '#fff', color: '#1d1d1f',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <input
                    type="text" name="pincode" placeholder="PIN Code" value={formData.pincode}
                    onChange={handleInputChange} required
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                      fontSize: '16px', background: '#fff', color: '#1d1d1f',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <select
                    name="country" value={formData.country} onChange={handleInputChange}
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb', 
                      fontSize: '16px', background: '#fff', color: '#1d1d1f'
                    }}
                  >
                    <option value="India">India</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div style={{marginBottom: '40px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginRight: '20px', color: '#fff', fontSize: '20px'
                  }}>
                    💳
                  </div>
                  <h2 style={{fontSize: '28px', fontWeight: '600', color: '#1d1d1f', margin: 0}}>
                    Payment Method
                  </h2>
                </div>
                
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px'}}>
                  <label style={{
                    display: 'flex', alignItems: 'center', padding: '20px', cursor: 'pointer',
                    border: `2px solid ${formData.paymentMethod === 'cod' ? '#007aff' : '#e5e7eb'}`,
                    borderRadius: '12px', background: formData.paymentMethod === 'cod' ? '#f0f8ff' : '#fff',
                    transition: 'all 0.3s ease'
                  }}>
                    <input
                      type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange} style={{marginRight: '15px', transform: 'scale(1.2)'}}
                    />
                    <div>
                      <div style={{fontSize: '18px', fontWeight: '600', color: '#1d1d1f'}}>💰 Cash on Delivery</div>
                      <div style={{fontSize: '14px', color: '#666'}}>Pay when you receive</div>
                    </div>
                  </label>
                  
                  <label style={{
                    display: 'flex', alignItems: 'center', padding: '20px', cursor: 'pointer',
                    border: `2px solid ${formData.paymentMethod === 'card' ? '#007aff' : '#e5e7eb'}`,
                    borderRadius: '12px', background: formData.paymentMethod === 'card' ? '#f0f8ff' : '#fff',
                    transition: 'all 0.3s ease'
                  }}>
                    <input
                      type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange} style={{marginRight: '15px', transform: 'scale(1.2)'}}
                    />
                    <div>
                      <div style={{fontSize: '18px', fontWeight: '600', color: '#1d1d1f'}}>💳 Card Payment</div>
                      <div style={{fontSize: '14px', color: '#666'}}>Credit/Debit Card</div>
                    </div>
                  </label>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div style={{padding: '20px', background: '#f8f9fa', borderRadius: '12px'}}>
                    <input
                      type="text" name="cardNumber" placeholder="1234 5678 9012 3456" value={formData.cardNumber}
                      onChange={handleInputChange} required
                      style={{
                        width: '100%', padding: '16px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                        fontSize: '16px', marginBottom: '15px', background: '#fff', color: '#1d1d1f'
                      }}
                    />
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '15px'}}>
                      <input
                        type="text" name="expiryDate" placeholder="MM/YY" value={formData.expiryDate}
                        onChange={handleInputChange} required
                        style={{
                          padding: '16px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                          fontSize: '16px', background: '#fff', color: '#1d1d1f'
                        }}
                      />
                      <input
                        type="text" name="cvv" placeholder="CVV" value={formData.cvv}
                        onChange={handleInputChange} required
                        style={{
                          padding: '16px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                          fontSize: '16px', background: '#fff', color: '#1d1d1f'
                        }}
                      />
                      <input
                        type="text" name="cardName" placeholder="Name on Card" value={formData.cardName}
                        onChange={handleInputChange} required
                        style={{
                          padding: '16px', borderRadius: '8px', border: '2px solid #e5e7eb', 
                          fontSize: '16px', background: '#fff', color: '#1d1d1f'
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', padding: '20px', background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
                  border: 'none', borderRadius: '12px', color: '#fff', fontSize: '20px', fontWeight: '700',
                  cursor: 'pointer', boxShadow: '0 10px 30px rgba(34,197,94,0.4)', 
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.boxShadow = '0 15px 40px rgba(34,197,94,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 10px 30px rgba(34,197,94,0.4)'
                }}
              >
                🚀 Place Order - ₹{total.toLocaleString()}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div style={{
            background: 'rgba(255,255,255,0.95)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '24px', 
            padding: '50px', 
            height: 'fit-content',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            position: 'sticky',
            top: '120px'
          }}>
            <h2 style={{fontSize: '32px', fontWeight: '700', color: '#1d1d1f', marginBottom: '35px'}}>
              Order Summary
            </h2>
            
            {/* Delivery Info */}
            <div style={{
              background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              padding: '25px', borderRadius: '16px', marginBottom: '35px'
            }}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                <span style={{fontSize: '32px', marginRight: '15px'}}>🚚</span>
                <div>
                  <div style={{fontSize: '20px', fontWeight: '700', color: '#1d1d1f', marginBottom: '5px'}}>Expected Delivery</div>
                  <div style={{fontSize: '16px', color: '#1e40af', fontWeight: '600'}}>{formattedDeliveryDate}</div>
                </div>
              </div>
              <div style={{fontSize: '16px', color: '#374151', fontWeight: '500'}}>
                ⚡ Express delivery in 3-5 business days
              </div>
            </div>
            
            {/* Items List */}
            <div style={{marginBottom: '35px'}}>
              <h3 style={{fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#1d1d1f'}}>
                Items ({getCartItemCount()})
              </h3>
              <div style={{maxHeight: '300px', overflowY: 'auto'}}>
                {cartItems.map(item => (
                  <div key={item.id} style={{
                    display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px',
                    padding: '20px', background: '#f8f9fa', borderRadius: '16px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop'}
                      alt={item.name}
                      style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px'}}
                    />
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '18px', fontWeight: '700', color: '#1d1d1f', marginBottom: '8px'}}>
                        {item.name}
                      </h4>
                      <p style={{fontSize: '16px', color: '#666', margin: 0}}>
                        Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <span style={{fontSize: '20px', fontWeight: '700', color: '#1d1d1f'}}>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bill Details */}
            <div style={{borderTop: '2px solid #f0f0f0', paddingTop: '30px'}}>
              <h3 style={{fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#1d1d1f'}}>
                Bill Details
              </h3>
              
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                <span style={{fontSize: '18px', color: '#666'}}>Item Total</span>
                <span style={{fontSize: '18px', fontWeight: '600', color: '#1d1d1f'}}>₹{subtotal.toLocaleString()}</span>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                <span style={{fontSize: '18px', color: '#666'}}>Delivery Fee</span>
                <span style={{fontSize: '18px', fontWeight: '600', color: shipping === 0 ? '#22c55e' : '#1d1d1f'}}>
                  {shipping === 0 ? (
                    <span>
                      <span style={{textDecoration: 'line-through', color: '#999'}}>₹199</span>
                      <span style={{color: '#22c55e', marginLeft: '10px', fontWeight: '700'}}>FREE</span>
                    </span>
                  ) : `₹${shipping}`}
                </span>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                <span style={{fontSize: '18px', color: '#666'}}>Packaging Fee</span>
                <span style={{fontSize: '18px', fontWeight: '600', color: '#1d1d1f'}}>₹{packaging}</span>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
                <span style={{fontSize: '18px', color: '#666'}}>GST (18%)</span>
                <span style={{fontSize: '18px', fontWeight: '600', color: '#1d1d1f'}}>₹{tax.toLocaleString()}</span>
              </div>
              
              {shipping === 0 && (
                <div style={{
                  background: '#dcfce7', padding: '15px', borderRadius: '12px', marginBottom: '25px',
                  border: '1px solid #bbf7d0'
                }}>
                  <span style={{fontSize: '16px', color: '#166534', fontWeight: '700'}}>
                    🎉 You saved ₹199 on delivery!
                  </span>
                </div>
              )}
              
              <div style={{
                borderTop: '3px solid #1d1d1f', paddingTop: '25px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <span style={{fontSize: '26px', fontWeight: '700', color: '#1d1d1f'}}>Total Amount</span>
                <span style={{fontSize: '32px', fontWeight: '700', color: '#007aff'}}>
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
