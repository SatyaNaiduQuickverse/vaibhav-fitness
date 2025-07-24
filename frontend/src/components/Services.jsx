import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your goals",
      price: "₹3,000/session",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "Group Training", 
      description: "High-energy group sessions with community",
      price: "₹1,500/session",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    },
    {
      title: "Weight Loss Program",
      description: "Comprehensive weight loss with nutrition",
      price: "₹15,000/month", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>TRAINING <span className="highlight">PROGRAMS</span></h2>
          <p>Choose from our comprehensive range of fitness programs</p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          {services.map((service, index) => (
            <div key={index} className="stat-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src={service.image} alt={service.title} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              <div style={{padding: '30px'}}>
                <h3 style={{marginBottom: '15px', fontSize: '24px'}}>{service.title}</h3>
                <p style={{color: '#666', marginBottom: '20px'}}>{service.description}</p>
                <div className="stat-number" style={{fontSize: '28px', marginBottom: '20px'}}>{service.price}</div>
                <button className="btn btn-primary" style={{width: '100%'}}>Choose Program</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
