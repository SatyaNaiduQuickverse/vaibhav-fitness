import React, { useState } from 'react'

const Login = ({ isOpen, onClose }) => {
 const [isLogin, setIsLogin] = useState(true)

 if (!isOpen) return null

 return (
   <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}>
     <div style={{background: '#1a1a1a', padding: '40px', borderRadius: '16px', width: '400px', border: '1px solid rgba(255,255,255,0.1)'}}>
       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
         <h2 style={{color: '#ff6b35'}}>{isLogin ? 'Welcome Back!' : 'Join the Elite!'}</h2>
         <button onClick={onClose} style={{background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer'}}>×</button>
       </div>
       
       <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
         {!isLogin && (
           <input type="text" placeholder="Full Name" style={{padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white'}} />
         )}
         <input type="email" placeholder="Email" style={{padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white'}} />
         <input type="password" placeholder="Password" style={{padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white'}} />
         
         <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
           {isLogin ? 'Sign In' : 'Create Account'}
         </button>
         
         <p style={{textAlign: 'center', color: '#ccc'}}>
           {isLogin ? "Don't have an account?" : 'Already have an account?'}
           <button type="button" onClick={() => setIsLogin(!isLogin)} style={{background: 'none', border: 'none', color: '#ff6b35', cursor: 'pointer', marginLeft: '5px'}}>
             {isLogin ? 'Sign up' : 'Sign in'}
           </button>
         </p>
       </form>
     </div>
   </div>
 )
}

export default Login
