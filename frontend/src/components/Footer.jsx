import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
 const navigate = useNavigate()
 const currentYear = new Date().getFullYear()

 return (
   <footer className="footer">
     <div className="container">
       <div className="footer-content">
         
         {/* Brand Section */}
         <div className="footer-section">
           <div style={{
             display: 'flex',
             alignItems: 'center',
             marginBottom: '20px'
           }}>
             <div style={{
               width: '40px',
               height: '40px',
               background: 'linear-gradient(135deg, #007aff, #34c759)',
               borderRadius: '10px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               marginRight: '12px',
               fontSize: '20px'
             }}>
               💪
             </div>
             <h3 style={{
               fontSize: '24px',
               fontWeight: '800',
               color: '#dc2626',
               margin: 0,
               letterSpacing: '-1px'
             }}>
               VAIBHAV
             </h3>
           </div>
           <p style={{
             fontSize: '16px',
             lineHeight: '1.6',
             marginBottom: '24px',
             maxWidth: '280px'
           }}>
             Transform your body and mind with professional fitness coaching. 
             Your journey to elite performance starts here.
           </p>
           
           {/* Social Links */}
           <div style={{ display: 'flex', gap: '12px' }}>
             {[
               { icon: '📘', label: 'Facebook', color: '#1877f2' },
               { icon: '📷', label: 'Instagram', color: '#e4405f' },
               { icon: '🐦', label: 'Twitter', color: '#1da1f2' },
               { icon: '💼', label: 'LinkedIn', color: '#0077b5' },
               { icon: '📺', label: 'YouTube', color: '#ff0000' }
             ].map((social, index) => (
               <button
                 key={index}
                 style={{
                   width: '44px',
                   height: '44px',
                   borderRadius: '12px',
                   border: 'none',
                   background: 'rgba(255, 255, 255, 0.1)',
                   color: '#fff',
                   fontSize: '18px',
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}
                 onMouseEnter={(e) => {
                   e.target.style.background = social.color
                   e.target.style.transform = 'translateY(-2px)'
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                   e.target.style.transform = 'translateY(0)'
                 }}
                 title={social.label}
               >
                 {social.icon}
               </button>
             ))}
           </div>
         </div>

         {/* Quick Links */}
         <div className="footer-section">
           <h3>Quick Links</h3>
           <ul>
             <li><a href="#services" onClick={(e) => {e.preventDefault(); navigate('/')}}>Services</a></li>
             <li><a href="/shop" onClick={(e) => {e.preventDefault(); navigate('/shop')}}>Shop</a></li>
             <li><a href="/contact" onClick={(e) => {e.preventDefault(); navigate('/contact')}}>Contact</a></li>
             <li><a href="#about" onClick={(e) => {e.preventDefault(); navigate('/')}}>About Coach</a></li>
             <li><a href="#testimonials" onClick={(e) => {e.preventDefault(); navigate('/')}}>Success Stories</a></li>
             <li><a href="#pricing" onClick={(e) => {e.preventDefault(); navigate('/')}}>Pricing</a></li>
           </ul>
         </div>

         {/* Services */}
         <div className="footer-section">
           <h3>Training Programs</h3>
           <ul>
             <li><a href="/contact">Personal Training</a></li>
             <li><a href="/contact">Strength Collective</a></li>
             <li><a href="/contact">Digital Coaching</a></li>
             <li><a href="/contact">Performance Optimization</a></li>
             <li><a href="/contact">Transformation Protocol</a></li>
             <li><a href="/contact">Elite Strength Building</a></li>
           </ul>
         </div>

         {/* Contact Info */}
         <div className="footer-section">
           <h3>Get In Touch</h3>
           <div style={{ marginBottom: '16px' }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
               <span style={{ fontSize: '16px', marginRight: '10px' }}>📧</span>
               <a href="mailto:coach@vaibhav.fitness" style={{ 
                 color: '#ccc', 
                 textDecoration: 'none',
                 transition: 'color 0.3s ease'
               }}
               onMouseEnter={(e) => e.target.style.color = '#007aff'}
               onMouseLeave={(e) => e.target.style.color = '#ccc'}
               >
                 coach@vaibhav.fitness
               </a>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
               <span style={{ fontSize: '16px', marginRight: '10px' }}>📞</span>
               <a href="tel:+918668844178" style={{ 
                 color: '#ccc', 
                 textDecoration: 'none',
                 transition: 'color 0.3s ease'
               }}
               onMouseEnter={(e) => e.target.style.color = '#007aff'}
               onMouseLeave={(e) => e.target.style.color = '#ccc'}
               >
                 +91 8668844178
               </a>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
               <span style={{ fontSize: '16px', marginRight: '10px' }}>📍</span>
               <span style={{ color: '#ccc' }}>Pune, Maharashtra, India</span>
             </div>
           </div>

           {/* Newsletter Signup */}
           <div style={{
             background: 'rgba(255, 255, 255, 0.05)',
             padding: '20px',
             borderRadius: '12px',
             border: '1px solid rgba(255, 255, 255, 0.1)'
           }}>
             <h4 style={{
               fontSize: '16px',
               fontWeight: '600',
               color: '#fff',
               marginBottom: '12px'
             }}>
               🔥 Get Fitness Tips
             </h4>
             <p style={{
               fontSize: '14px',
               color: '#ccc',
               marginBottom: '16px',
               lineHeight: '1.4'
             }}>
               Subscribe for exclusive workouts, nutrition tips, and transformation stories.
             </p>
             <div style={{ display: 'flex', gap: '8px' }}>
               <input
                 type="email"
                 placeholder="Enter your email"
                 style={{
                   flex: 1,
                   padding: '10px 12px',
                   borderRadius: '8px',
                   border: '1px solid rgba(255, 255, 255, 0.2)',
                   background: 'rgba(255, 255, 255, 0.1)',
                   color: '#fff',
                   fontSize: '14px'
                 }}
               />
               <button
                 style={{
                   padding: '10px 16px',
                   background: 'linear-gradient(135deg, #007aff, #34c759)',
                   border: 'none',
                   borderRadius: '8px',
                   color: '#fff',
                   fontSize: '14px',
                   fontWeight: '600',
                   cursor: 'pointer',
                   transition: 'transform 0.2s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
               >
                 Join
               </button>
             </div>
           </div>
         </div>
       </div>

       {/* Bottom Section */}
       <div className="footer-bottom">
         <div style={{
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
           flexWrap: 'wrap',
           gap: '20px'
         }}>
           <p style={{ margin: 0 }}>
             © {currentYear} Vaibhav Fitness. All rights reserved. Transform your limits.
           </p>
           <div style={{ display: 'flex', gap: '24px' }}>
             <a href="/privacy" style={{ 
               color: '#86868b', 
               textDecoration: 'none', 
               fontSize: '14px',
               transition: 'color 0.3s ease'
             }}
             onMouseEnter={(e) => e.target.style.color = '#fff'}
             onMouseLeave={(e) => e.target.style.color = '#86868b'}
             >
               Privacy Policy
             </a>
             <a href="/terms" style={{ 
               color: '#86868b', 
               textDecoration: 'none', 
               fontSize: '14px',
               transition: 'color 0.3s ease'
             }}
             onMouseEnter={(e) => e.target.style.color = '#fff'}
             onMouseLeave={(e) => e.target.style.color = '#86868b'}
             >
               Terms of Service
             </a>
             <a href="/refund" style={{ 
               color: '#86868b', 
               textDecoration: 'none', 
               fontSize: '14px',
               transition: 'color 0.3s ease'
             }}
             onMouseEnter={(e) => e.target.style.color = '#fff'}
             onMouseLeave={(e) => e.target.style.color = '#86868b'}
             >
               Refund Policy
             </a>
           </div>
         </div>
       </div>
     </div>
   </footer>
 )
}

export default Footer
