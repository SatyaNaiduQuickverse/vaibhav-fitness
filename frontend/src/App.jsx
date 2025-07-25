import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'

function App() {
 return (
   <CartProvider>
     <Router>
       <div className="App">
         <Header />
         <main>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/shop" element={<Shop />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/checkout" element={<Checkout />} />
           </Routes>
         </main>
         <Footer />
       </div>
     </Router>
   </CartProvider>
 )
}

export default App
