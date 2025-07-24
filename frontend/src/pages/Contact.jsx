import React, { useState } from 'react'

const Contact = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   phone: '',
   service: '',
   message: ''
 })

 const handleInputChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value })
 }

 const handleSubmit = (e) => {
   e.preventDefault()
   console.log('Form submitted:', formData)
   alert('Message sent successfully! We will get back to you soon.')
   setFormData({ name: '', email: '', phone: '', service: '', message: '' })
 }

 return (
   <div style={{
     paddingTop: '100px',
     minHeight: '100vh',
     backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1920&h=1080&fit=crop")',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundAttachment: 'fixed'
   }}>
     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
       
       <div style={{ textAlign: 'center', marginBottom: '60px', padding: '40px 0' }}>
         <h1 style={{ 
           fontSize: '48px', 
           fontWeight: '700', 
           color: '#fff', 
           marginBottom: '16px',
           textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
         }}>
           Get In Touch
         </h1>
         <p style={{ 
           fontSize: '21px', 
           color: '#f0f0f0',
           textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
         }}>
           Ready to transform your life? Let's start your fitness journey together.
         </p>
       </div>

       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
         
         {/* Contact Info */}
         <div style={{
           background: 'rgba(255,255,255,0.1)',
           backdropFilter: 'blur(20px)',
           borderRadius: '24px',
           padding: '50px',
           border: '1px solid rgba(255,255,255,0.2)',
           boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
         }}>
           <h2 style={{ 
             fontSize: '32px', 
             fontWeight: '700', 
             color: '#fff', 
             marginBottom: '40px',
             textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
           }}>
             Let's Connect
           </h2>
           
           <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
             <div style={{
               width: '50px', height: '50px', borderRadius: '50%',
               background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginRight: '20px', color: '#fff', fontSize: '20px'
             }}>
               ✉️
             </div>
             <div>
               <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '5px' }}>Email</h3>
               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>coach@vaibhav.fitness</p>
             </div>
           </div>

           <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
             <div style={{
               width: '50px', height: '50px', borderRadius: '50%',
               background: 'linear-gradient(135deg, #22c55e, #16a34a)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginRight: '20px', color: '#fff', fontSize: '20px'
             }}>
               📞
             </div>
             <div>
               <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '5px' }}>Phone</h3>
               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>+91 8668844178</p>
             </div>
           </div>

           <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
             <div style={{
               width: '50px', height: '50px', borderRadius: '50%',
               background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginRight: '20px', color: '#fff', fontSize: '20px'
             }}>
               📍
             </div>
             <div>
               <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '5px' }}>Location</h3>
               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Pune, Maharashtra, India</p>
             </div>
           </div>

           <div style={{
             background: 'rgba(255,107,53,0.2)',
             border: '1px solid rgba(255,107,53,0.3)',
             borderRadius: '16px',
             padding: '25px'
           }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
               <span style={{ fontSize: '24px', marginRight: '10px' }}>🔥</span>
               <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', margin: 0 }}>Ready to Start?</h4>
             </div>
             <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', margin: 0 }}>
               Book your free consultation today and take the first step towards your fitness transformation!
             </p>
           </div>
         </div>

         {/* Contact Form */}
         <div style={{
           background: 'rgba(255,255,255,0.1)',
           backdropFilter: 'blur(20px)',
           borderRadius: '24px',
           padding: '50px',
           border: '1px solid rgba(255,255,255,0.2)',
           boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
         }}>
           <form onSubmit={handleSubmit}>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
               <input
                 type="text"
                 name="name"
                 placeholder="Your Name"
                 value={formData.name}
                 onChange={handleInputChange}
                 required
                 style={{
                   padding: '16px',
                   borderRadius: '12px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '16px',
                   backdropFilter: 'blur(10px)'
                 }}
               />
               <input
                 type="email"
                 name="email"
                 placeholder="Your Email"
                 value={formData.email}
                 onChange={handleInputChange}
                 required
                 style={{
                   padding: '16px',
                   borderRadius: '12px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '16px',
                   backdropFilter: 'blur(10px)'
                 }}
               />
             </div>

             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
               <input
                 type="tel"
                 name="phone"
                 placeholder="Phone Number"
                 value={formData.phone}
                 onChange={handleInputChange}
                 required
                 style={{
                   padding: '16px',
                   borderRadius: '12px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '16px',
                   backdropFilter: 'blur(10px)'
                 }}
               />
               <select
                 name="service"
                 value={formData.service}
                 onChange={handleInputChange}
                 required
                 style={{
                   padding: '16px',
                   borderRadius: '12px',
                   border: '1px solid rgba(255,255,255,0.3)',
                   background: 'rgba(255,255,255,0.15)',
                   color: '#fff',
                   fontSize: '16px',
                   backdropFilter: 'blur(10px)',
                   appearance: 'none'
                 }}
               >
                 <option value="" style={{ background: '#1f2937', color: '#fff' }}>Select Service</option>
                 <option value="Personal Training" style={{ background: '#1f2937', color: '#fff' }}>Personal Training</option>
                 <option value="Group Sessions" style={{ background: '#1f2937', color: '#fff' }}>Group Sessions</option>
                 <option value="Online Coaching" style={{ background: '#1f2937', color: '#fff' }}>Online Coaching</option>
                 <option value="Nutrition Planning" style={{ background: '#1f2937', color: '#fff' }}>Nutrition Planning</option>
                 <option value="Weight Loss Program" style={{ background: '#1f2937', color: '#fff' }}>Weight Loss Program</option>
                 <option value="Muscle Building" style={{ background: '#1f2937', color: '#fff' }}>Muscle Building</option>
               </select>
             </div>

             <textarea
               name="message"
               placeholder="Tell us about your fitness goals..."
               value={formData.message}
               onChange={handleInputChange}
               required
               rows="5"
               style={{
                 width: '100%',
                 padding: '16px',
                 borderRadius: '12px',
                 border: '1px solid rgba(255,255,255,0.3)',
                 background: 'rgba(255,255,255,0.15)',
                 color: '#fff',
                 fontSize: '16px',
                 marginBottom: '30px',
                 backdropFilter: 'blur(10px)',
                 resize: 'vertical',
                 minHeight: '120px'
               }}
             />

             <button
               type="submit"
               style={{
                 width: '100%',
                 padding: '18px',
                 background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                 border: 'none',
                 borderRadius: '12px',
                 color: '#fff',
                 fontSize: '18px',
                 fontWeight: '700',
                 cursor: 'pointer',
                 boxShadow: '0 8px 25px rgba(220,38,38,0.4)',
                 transition: 'all 0.3s ease',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: '10px'
               }}
               onMouseEnter={(e) => {
                 e.target.style.transform = 'translateY(-3px)'
                 e.target.style.boxShadow = '0 12px 35px rgba(220,38,38,0.5)'
               }}
               onMouseLeave={(e) => {
                 e.target.style.transform = 'translateY(0)'
                 e.target.style.boxShadow = '0 8px 25px rgba(220,38,38,0.4)'
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
