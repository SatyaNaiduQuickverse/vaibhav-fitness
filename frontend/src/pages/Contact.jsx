import React, { useState } from 'react'

const Contact = () => {
 const [formData, setFormData] = useState({
   name: '', email: '', phone: '', service: '', message: ''
 })

 const handleInputChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value })
 }

 const handleSubmit = (e) => {
   e.preventDefault()
   alert('Message sent successfully!')
   setFormData({ name: '', email: '', phone: '', service: '', message: '' })
 }

 return (
   <div className="contact-container" style={{
     paddingTop: '100px',
     minHeight: '100vh',
     backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1920&h=1080&fit=crop")',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     padding: '100px 20px 40px'
   }}>
     <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
       
       <div style={{ textAlign: 'center', marginBottom: '40px' }}>
         <h1 className="contact-title" style={{ 
           fontSize: 'clamp(32px, 6vw, 48px)', 
           fontWeight: '700', 
           color: '#fff', 
           marginBottom: '12px',
           textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
         }}>
           Get In Touch
         </h1>
         <p className="contact-subtitle" style={{ 
           fontSize: 'clamp(16px, 3vw, 21px)', 
           color: '#f0f0f0'
         }}>
           Ready to transform your life? Let's start your fitness journey.
         </p>
       </div>

       <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
         
         {/* Contact Info */}
         <div className="contact-info" style={{
           background: 'rgba(255,255,255,0.1)',
           backdropFilter: 'blur(20px)',
           borderRadius: '20px',
           padding: '40px 30px',
           border: '1px solid rgba(255,255,255,0.2)'
         }}>
           <h2 style={{ 
             fontSize: 'clamp(24px, 4vw, 32px)', 
             fontWeight: '700', 
             color: '#fff', 
             marginBottom: '30px'
           }}>
             Let's Connect
           </h2>
           
           <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
             <div style={{
               width: '40px', height: '40px', borderRadius: '50%',
               background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginRight: '15px', color: '#fff', fontSize: '16px'
             }}>
               ✉️
             </div>
             <div>
               <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>Email</h3>
               <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>coach@vaibhav.fitness</p>
             </div>
           </div>

           <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
             <div style={{
               width: '40px', height: '40px', borderRadius: '50%',
               background: 'linear-gradient(135deg, #22c55e, #16a34a)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginRight: '15px', color: '#fff', fontSize: '16px'
             }}>
               📞
             </div>
             <div>
               <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>Phone</h3>
               <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>+91 8668844178</p>
             </div>
           </div>

           <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
             <div style={{
               width: '40px', height: '40px', borderRadius: '50%',
               background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginRight: '15px', color: '#fff', fontSize: '16px'
             }}>
               📍
             </div>
             <div>
               <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>Location</h3>
               <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Pune, Maharashtra, India</p>
             </div>
           </div>
         </div>

         {/* Contact Form */}
         <div className="contact-form" style={{
           background: 'rgba(255,255,255,0.1)',
           backdropFilter: 'blur(20px)',
           borderRadius: '20px',
           padding: '40px 30px',
           border: '1px solid rgba(255,255,255,0.2)'
         }}>
           <form onSubmit={handleSubmit}>
             <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
               <input
                 type="text"
                 name="name"
                 placeholder="Your Name"
                 value={formData.name}
                 onChange={handleInputChange}
                 required
                 className="form-input"
                 style={{
                   padding: '12px',
                   borderRadius: '10px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '14px'
                 }}
               />
               <input
                 type="email"
                 name="email"
                 placeholder="Your Email"
                 value={formData.email}
                 onChange={handleInputChange}
                 required
                 className="form-input"
                 style={{
                   padding: '12px',
                   borderRadius: '10px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '14px'
                 }}
               />
             </div>

             <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
               <input
                 type="tel"
                 name="phone"
                 placeholder="Phone Number"
                 value={formData.phone}
                 onChange={handleInputChange}
                 required
                 className="form-input"
                 style={{
                   padding: '12px',
                   borderRadius: '10px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '14px'
                 }}
               />
               <select
                 name="service"
                 value={formData.service}
                 onChange={handleInputChange}
                 required
                 className="form-input"
                 style={{
                   padding: '12px',
                   borderRadius: '10px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '14px'
                 }}
               >
                 <option value="">Select Service</option>
                 <option value="Personal Training">Personal Training</option>
                 <option value="Group Sessions">Group Sessions</option>
                 <option value="Online Coaching">Online Coaching</option>
               </select>
             </div>

             <textarea
               name="message"
               placeholder="Tell us about your fitness goals..."
               value={formData.message}
               onChange={handleInputChange}
               required
               rows="4"
               style={{
                 width: '100%',
                 padding: '12px',
                 borderRadius: '10px',
                 border: '1px solid rgba(255,255,255,0.3)',
                 background: 'rgba(255,255,255,0.15)',
                 color: '#fff',
                 fontSize: '14px',
                 marginBottom: '20px',
                 resize: 'vertical',
                 minHeight: '100px'
               }}
             />

             <button
               type="submit"
               className="form-button"
               style={{
                 width: '100%',
                 padding: '14px',
                 background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                 border: 'none',
                 borderRadius: '10px',
                 color: '#fff',
                 fontSize: '16px',
                 fontWeight: '700',
                 cursor: 'pointer'
               }}
             >
               🚀 Send Message
             </button>
           </form>
         </div>
       </div>
     </div>
   </div>
 )
}

export default Contact
