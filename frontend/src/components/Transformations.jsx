import React from 'react'

const Transformations = () => {
  const transformations = [
    {
      name: "Rahul Sharma",
      before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop",
      duration: "6 months",
      result: "Lost 15kg"
    },
    {
      name: "Priya Patel", 
      before: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=300&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=300&h=400&fit=crop",
      duration: "4 months",
      result: "Lost 12kg"
    }
  ]

  return (
    <section className="section" style={{background: '#1a1a1a'}}>
      <div className="container">
        <div className="section-title">
          <h2><span className="highlight">TRANSFORMATIONS</span></h2>
          <p>Real people, real results. See how Vaibhav has helped transform lives.</p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px'}}>
          {transformations.map((person, index) => (
            <div key={index} className="stat-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', color: '#ff6b35'}}>{person.name}</h3>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
                <div style={{flex: 1, textAlign: 'center'}}>
                  <img src={person.before} alt="Before" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}} />
                  <p style={{marginTop: '10px', color: '#ccc'}}>BEFORE</p>
                </div>
                <div style={{flex: 1, textAlign: 'center'}}>
                  <img src={person.after} alt="After" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}} />
                  <p style={{marginTop: '10px', color: '#ccc'}}>AFTER</p>
                </div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div className="stat-number">{person.result}</div>
                <div className="stat-label">{person.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformations
