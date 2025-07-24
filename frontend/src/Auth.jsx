import React, { useState } from 'react'

const Auth = ({ isOpen, onClose, initialMode = 'login' }) => {
 const [mode, setMode] = useState(initialMode)
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   phone: '',
   password: '',
   confirmPassword: ''
 })

 const handleInputChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value })
 }

 const handleSubmit = (e) => {
   e.preventDefault()
   console.log(`${mode} attempt:`, formData)
   alert(`${mode} successful!`)
   onClose()
 }

 const switchMode = () => {
   setMode(mode === 'login' ? 'signup' : 'login')
   setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '' })
 }

 if (!isOpen) return null

 return (
   <div style={{
     position: 'fixed',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     background: 'rgba(0, 0, 0, 0.8)',
     backdropFilter: 'blur(10px)',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     zIndex: 10000,
     padding: '20px'
   }}>
     <div style={{
       background: 'rgba(255, 255, 255, 0.95)',
       backdropFilter: 'blur(20px)',
       borderRadius: '24px',
       padding: '50px',
       maxWidth: '450px',
       width: '100%',
       border: '1px solid rgba(255, 255, 255, 0.3)',
       boxShadow: '0 32px 80px rgba(0, 0, 0, 0.3)',
       position: 'relative'
     }}>
       
       {/* Close Button */}
       <button
         onClick={onClose}
         style={{
           position: 'absolute',
           top: '20px',
           right: '20px',
           background: 'none',
           border: 'none',
           fontSize: '24px',
           cursor: 'pointer',
           color: '#666',
           transition: 'color 0.3s ease'
         }}
         onMouseEnter={(e) => e.target.style.color = '#1d1d1f'}
         onMouseLeave={(e) => e.target.style.color = '#666'}
       >
         ×
       </button>

       {/* Header */}
       <div style={{ textAlign: 'center', marginBottom: '40px' }}>
         <div style={{
           width: '60px',
           height: '60px',
           background: 'linear-gradient(135deg, #007aff, #34c759)',
           borderRadius: '16px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           margin: '0 auto 20px',
           fontSize: '24px'
         }}>
           {mode === 'login' ? '🏋️‍♂️' : '💪'}
         </div>
         <h2 style={{
           fontSize: '28px',
           fontWeight: '700',
           color: '#1d1d1f',
           marginBottom: '8px',
           letterSpacing: '-0.01em'
         }}>
           {mode === 'login' ? 'Welcome Back' : 'Join Elite Fitness'}
         </h2>
         <p style={{
           fontSize: '16px',
           color: '#86868b',
           margin: 0
         }}>
           {mode === 'login' 
             ? 'Sign in to continue your fitness journey' 
             : 'Start your transformation today'
           }
         </p>
       </div>

       {/* Form */}
       <form onSubmit={handleSubmit}>
         {mode === 'signup' && (
           <div style={{ marginBottom: '20px' }}>
             <input
               type="text"
               name="name"
               placeholder="Full Name"
               value={formData.name}
               onChange={handleInputChange}
               required={mode === 'signup'}
               style={{
                 width: '100%',
                 padding: '16px',
                 borderRadius: '12px',
                 border: '2px solid #f0f0f0',
                 fontSize: '16px',
                 background: '#fafafa',
                 color: '#1d1d1f',
                 transition: 'all 0.3s ease',
                 fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
               }}
               onFocus={(e) => {
                 e.target.style.borderColor = '#007aff'
                 e.target.style.background = '#ffffff'
               }}
               onBlur={(e) => {
                 e.target.style.borderColor = '#f0f0f0'
                 e.target.style.background = '#fafafa'
               }}
             />
           </div>
         )}

         <div style={{ marginBottom: '20px' }}>
           <input
             type="email"
             name="email"
             placeholder="Email Address"
             value={formData.email}
             onChange={handleInputChange}
             required
             style={{
               width: '100%',
               padding: '16px',
               borderRadius: '12px',
               border: '2px solid #f0f0f0',
               fontSize: '16px',
               background: '#fafafa',
               color: '#1d1d1f',
               transition: 'all 0.3s ease',
               fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
             }}
             onFocus={(e) => {
               e.target.style.borderColor = '#007aff'
               e.target.style.background = '#ffffff'
             }}
             onBlur={(e) => {
               e.target.style.borderColor = '#f0f0f0'
               e.target.style.background = '#fafafa'
             }}
           />
         </div>

         {mode === 'signup' && (
           <div style={{ marginBottom: '20px' }}>
             <input
               type="tel"
               name="phone"
               placeholder="Phone Number"
               value={formData.phone}
               onChange={handleInputChange}
               required={mode === 'signup'}
               style={{
                 width: '100%',
                 padding: '16px',
                 borderRadius: '12px',
                 border: '2px solid #f0f0f0',
                 fontSize: '16px',
                 background: '#fafafa',
                 color: '#1d1d1f',
                 transition: 'all 0.3s ease',
                 fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
               }}
               onFocus={(e) => {
                 e.target.style.borderColor = '#007aff'
                 e.target.style.background = '#ffffff'
               }}
               onBlur={(e) => {
                 e.target.style.borderColor = '#f0f0f0'
                 e.target.style.background = '#fafafa'
               }}
             />
           </div>
         )}

         <div style={{ marginBottom: '20px' }}>
           <input
             type="password"
             name="password"
             placeholder="Password"
             value={formData.password}
             onChange={handleInputChange}
             required
             style={{
               width: '100%',
               padding: '16px',
               borderRadius: '12px',
               border: '2px solid #f0f0f0',
               fontSize: '16px',
               background: '#fafafa',
               color: '#1d1d1f',
               transition: 'all 0.3s ease',
               fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
             }}
             onFocus={(e) => {
               e.target.style.borderColor = '#007aff'
               e.target.style.background = '#ffffff'
             }}
             onBlur={(e) => {
               e.target.style.borderColor = '#f0f0f0'
               e.target.style.background = '#fafafa'
             }}
           />
         </div>

         {mode === 'signup' && (
           <div style={{ marginBottom: '30px' }}>
             <input
               type="password"
               name="confirmPassword"
               placeholder="Confirm Password"
               value={formData.confirmPassword}
               onChange={handleInputChange}
               required={mode === 'signup'}
               style={{
                 width: '100%',
                 padding: '16px',
                 borderRadius: '12px',
                 border: '2px solid #f0f0f0',
                 fontSize: '16px',
                 background: '#fafafa',
                 color: '#1d1d1f',
                 transition: 'all 0.3s ease',
                 fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
               }}
               onFocus={(e) => {
                 e.target.style.borderColor = '#007aff'
                 e.target.style.background = '#ffffff'
               }}
               onBlur={(e) => {
                 e.target.style.borderColor = '#f0f0f0'
                 e.target.style.background = '#fafafa'
               }}
             />
           </div>
         )}

         <button
           type="submit"
           style={{
             width: '100%',
             padding: '16px',
             background: 'linear-gradient(135deg, #1d1d1f 0%, #2c2c2e 100%)',
             border: 'none',
             borderRadius: '12px',
             color: 'white',
             fontSize: '17px',
             fontWeight: '600',
             cursor: 'pointer',
             transition: 'all 0.3s ease',
             marginBottom: '24px',
             letterSpacing: '-0.01em'
           }}
           onMouseEnter={(e) => {
             e.target.style.transform = 'translateY(-2px)'
             e.target.style.boxShadow = '0 8px 25px rgba(29, 29, 31, 0.4)'
           }}
           onMouseLeave={(e) => {
             e.target.style.transform = 'translateY(0)'
             e.target.style.boxShadow = 'none'
           }}
         >
           {mode === 'login' ? '🚀 Sign In' : '💪 Create Account'}
         </button>

         {mode === 'login' && (
           <div style={{ textAlign: 'center', marginBottom: '24px' }}>
             <button
               type="button"
               style={{
                 background: 'none',
                 border: 'none',
                 color: '#007aff',
                 fontSize: '15px',
                 cursor: 'pointer',
                 textDecoration: 'underline'
               }}
             >
               Forgot Password?
             </button>
           </div>
         )}

         <div style={{ textAlign: 'center' }}>
           <span style={{ color: '#86868b', fontSize: '15px' }}>
             {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
           </span>
           <button
             type="button"
             onClick={switchMode}
             style={{
               background: 'none',
               border: 'none',
               color: '#007aff',
               fontSize: '15px',
               fontWeight: '600',
               cursor: 'pointer',
               textDecoration: 'underline'
             }}
           >
             {mode === 'login' ? 'Sign Up' : 'Sign In'}
           </button>
         </div>
       </form>
     </div>
   </div>
 )
}

export default Auth
