import React from 'react'

const Hero = () => {
  return (
    <section className="video-section" style={{paddingTop: '80px'}}>
      <video autoPlay loop muted playsInline>
        <source src="https://videos.pexels.com/video-files/5319759/5319759-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      
      <div className="video-content">
        <h1>
          TRANSFORM YOUR <span className="highlight">BODY</span><br/>
          TRANSFORM YOUR <span className="highlight">LIFE</span>
        </h1>
        <p>Professional personal training with Vaibhav - Your journey to excellence starts here.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Start Your Journey</button>
          <button className="btn btn-secondary">▶ Watch Success Stories</button>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-number">500+</div>
          <div className="stat-label">Clients Transformed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">8+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
