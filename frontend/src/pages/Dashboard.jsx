import React from 'react'

const Dashboard = () => {
 return (
   <div className="section" style={{paddingTop: '120px'}}>
     <div className="container">
       <div className="section-title">
         <h2>Welcome back, <span className="highlight">Client</span></h2>
         <p>Track your fitness journey and progress</p>
       </div>
       
       <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px'}}>
         <div className="stat-card">
           <div className="stat-number">12</div>
           <div className="stat-label">Total Sessions</div>
         </div>
         <div className="stat-card">
           <div className="stat-number">8</div>
           <div className="stat-label">Completed</div>
         </div>
         <div className="stat-card">
           <div className="stat-number">4</div>
           <div className="stat-label">Upcoming</div>
         </div>
       </div>

       <div style={{textAlign: 'center'}}>
         <button className="btn btn-primary">Book New Session</button>
       </div>
     </div>
   </div>
 )
}

export default Dashboard
