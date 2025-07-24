import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const navigate = useNavigate()

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Software Engineer",  
      text: "Vaibhav transformed my relationship with fitness. I gained 12 kg of lean muscle in 6 months and feel stronger than ever!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      text: "The online coaching program fit perfectly into my busy schedule. Amazing results with flexible timing and constant support!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Vikram Singh", 
      role: "Fitness Enthusiast",
      text: "Professional, knowledgeable, and incredibly motivating. Best investment I've made for my strength and confidence!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop playsInline style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2
        }}>
          <source src="https://videos.pexels.com/video-files/5319759/5319759-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/5319759/5319759-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>Transform Your Body,<br />Elevate Your Life</h1>
          <p>Professional fitness coaching that delivers real results. Start your transformation journey today with science-backed training methods.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Start Your Journey
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/shop')}>
              Shop Fitness Gear
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Forge Your Strength</h2>
            <p>Professional training programs designed to push your limits and achieve extraordinary results</p>
          </div>
          <div className="services-grid">
            
            <div className="service-card">
              <div className="service-icon">🏋️‍♂️</div>
              <h3>Personal Training</h3>
              <p className="price">₹3,500/session</p>
              <p className="description">Elite one-on-one training with personalized attention and advanced techniques.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Personal</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">90min</span>
                  <span className="stat-label">Session</span>
                </div>
              </div>
              <ul>
                <li>Movement analysis & form optimization</li>
                <li>Advanced progression protocols</li>
                <li>Performance tracking & analytics</li>
                <li>Injury prevention strategies</li>
              </ul>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>Start Training</button>
            </div>

            <div className="service-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="service-icon">💪</div>
              <h3>Strength Collective</h3>
              <p className="price">₹1,500/session</p>
              <p className="description">High-intensity group sessions focused on building raw strength and mental toughness.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">4-6</span>
                  <span className="stat-label">Athletes</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">75min</span>
                  <span className="stat-label">Intensity</span>
                </div>
              </div>
              <ul>
                <li>Competitive training environment</li>
                <li>Advanced compound movements</li>
                <li>Team accountability system</li>
                <li>Progressive overload protocols</li>
              </ul>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Join Elite Group</button>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Digital Coaching</h3>
              <p className="price">₹2,500/month</p>
              <p className="description">Complete virtual coaching system with live sessions and custom programming.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Custom</span>
                  <span className="stat-label">Programs</span>
                </div>
              </div>
              <ul>
                <li>Live virtual training sessions</li>
                <li>Custom workout programming</li>
                <li>Nutrition optimization plans</li>
                <li>Weekly progress analysis</li>
              </ul>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>Go Digital</button>
            </div>

            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Performance Optimization</h3>
              <p className="price">₹4,500/month</p>
              <p className="description">Advanced athletic performance program for peak results and competition prep.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">Elite</span>
                  <span className="stat-label">Level</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12wk</span>
                  <span className="stat-label">Program</span>
                </div>
              </div>
              <ul>
                <li>Athletic performance testing</li>
                <li>Sport-specific training protocols</li>
                <li>Recovery optimization</li>
                <li>Mental performance coaching</li>
              </ul>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>Optimize Performance</button>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Transformation Protocol</h3>
              <p className="price">₹8,500/month</p>
              <p className="description">Comprehensive 16-week body transformation with training, nutrition, and mindset.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">16wk</span>
                  <span className="stat-label">Program</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Total</span>
                  <span className="stat-label">Transform</span>
                </div>
              </div>
              <ul>
                <li>Complete lifestyle transformation</li>
                <li>Weekly body composition analysis</li>
                <li>Habit formation protocols</li>
                <li>Guaranteed transformation results</li>
              </ul>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>Start Transformation</button>
            </div>

            <div className="service-card">
              <div className="service-icon">🔥</div>
              <h3>Elite Strength Building</h3>
              <p className="price">₹6,500/month</p>
              <p className="description">Hardcore strength development focused on maximum muscle mass and power.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">Muscle</span>
                  <span className="stat-label">Focus</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12wk</span>
                  <span className="stat-label">Cycles</span>
                </div>
              </div>
              <ul>
                <li>Advanced periodization training</li>
                <li>Powerlifting techniques</li>
                <li>Supplement optimization</li>
                <li>Strength testing benchmarks</li>
              </ul>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>Build Strength</button>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Meet Your Coach</h2>
              <h3>Vaibhav - Elite Performance Coach</h3>
              <p>
                With over 8 years of experience in high-performance training, I've specialized in transforming ordinary individuals into extraordinary athletes. My approach combines cutting-edge exercise science with proven methodologies to deliver measurable, life-changing results.
              </p>
              <div className="credentials">
                <div className="credential">
                  <strong>500+</strong>
                  <span>Lives Transformed</span>
                </div>
                <div className="credential">  
                  <strong>8+</strong>
                  <span>Years Elite Training</span>
                </div>
                <div className="credential">
                  <strong>95%</strong>
                  <span>Success Rate</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=600&fit=crop&crop=face" alt="Vaibhav - Elite Fitness Coach" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section with Background Video */}
      <section className="video">
        <video autoPlay muted loop playsInline>
          <source src="https://videos.pexels.com/video-files/4920813/4920813-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/4920813/4920813-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        <div className="video-content">
          <h2>Unleash Your Power</h2>
          <p>Watch real transformations and discover what's possible when you commit to elite-level training and push beyond your limits</p>
          <button className="video-cta" onClick={() => navigate('/contact')}>
            🔥 Start Your Transformation
          </button>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>Success Stories</h2>
          <p className="testimonials-subtitle">Real results from real people who transformed their lives with elite coaching</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="testimonial-content">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <blockquote>"{testimonial.text}"</blockquote>
                  <cite>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </cite>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready To Transform Your Life?</h2>
            <p>Join hundreds of successful transformations. Your journey to elite fitness starts with a single decision.</p>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
