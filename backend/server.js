const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Database connection (optional - using in-memory for demo)
const pool = new Pool({
 host: process.env.DB_HOST || 'postgres',
 database: process.env.DB_NAME || 'vaibhav_gym',
 user: process.env.DB_USER || 'postgres',
 password: process.env.DB_PASS || 'gym_secure_2024',
 port: 5432,
})

// Middleware
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
 windowMs: 15 * 60 * 1000,
 max: 100,
 message: { error: 'Too many requests, please try again later.' }
})
app.use(limiter)

// Auth middleware
const authenticateToken = (req, res, next) => {
 const authHeader = req.headers['authorization']
 const token = authHeader && authHeader.split(' ')[1]

 if (!token) {
   return res.status(401).json({ error: 'Access token required' })
 }

 jwt.verify(token, process.env.JWT_SECRET || 'gym_secret_key', (err, user) => {
   if (err) {
     return res.status(403).json({ error: 'Invalid token' })
   }
   req.user = user
   next()
 })
}

// In-memory storage (replace with database in production)
let users = []
let products = [
 {
   id: 1,
   name: 'Premium Whey Protein',
   price: 2499,
   image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400',
   category: 'supplements',
   description: 'High-quality whey protein for muscle building and recovery.',
   inStock: true
 },
 {
   id: 2,
   name: 'Pre-Workout Energy Boost',
   price: 1899,
   image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
   category: 'supplements',
   description: 'Explosive energy and focus for intense workouts.',
   inStock: true
 },
 {
   id: 3,
   name: 'Resistance Bands Set',
   price: 1299,
   image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
   category: 'equipment',
   description: 'Complete set of resistance bands for home workouts.',
   inStock: true
 },
 {
   id: 4,
   name: 'Gym T-Shirt - Beast Mode',
   price: 799,
   image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
   category: 'apparel',
   description: 'Premium cotton gym t-shirt for ultimate comfort.',
   inStock: true
 },
 {
   id: 5,
   name: 'BCAA Recovery Powder',
   price: 1599,
   image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400',
   category: 'supplements',
   description: 'Essential amino acids for faster muscle recovery.',
   inStock: true
 },
 {
   id: 6,
   name: 'Adjustable Dumbbells',
   price: 8999,
   image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
   category: 'equipment',
   description: 'Space-saving adjustable dumbbells for home gym.',
   inStock: false
 }
]
let bookings = []
let transformations = [
 {
   id: 1,
   name: 'Rahul Sharma',
   beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
   afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
   duration: '6 months',
   weightLoss: '15 kg',
   testimonial: 'Vaibhav transformed not just my body but my entire lifestyle!'
 },
 {
   id: 2,
   name: 'Priya Patel',
   beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
   afterImage: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400',
   duration: '4 months',
   weightLoss: '12 kg',
   testimonial: 'Best decision I ever made! The results speak for themselves.'
 }
]

// Routes
app.get('/', (req, res) => {
 res.json({ 
   message: 'Vaibhav Gym API',
   status: 'running',
   version: '1.0.0'
 })
})

app.get('/api/health', (req, res) => {
 res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Auth routes
app.post('/api/auth/register', async (req, res) => {
 try {
   const { name, email, password, phone, goals } = req.body

   if (!name || !email || !password) {
     return res.status(400).json({ error: 'Name, email and password are required' })
   }

   const existingUser = users.find(u => u.email === email)
   if (existingUser) {
     return res.status(400).json({ error: 'User already exists' })
   }

   const saltRounds = 10
   const hashedPassword = await bcrypt.hash(password, saltRounds)

   const user = {
     id: users.length + 1,
     name,
     email,
     password: hashedPassword,
     phone: phone || null,
     goals: goals || null,
     createdAt: new Date().toISOString(),
     role: 'client'
   }

   users.push(user)

   const token = jwt.sign(
     { userId: user.id, email: user.email, role: user.role },
     process.env.JWT_SECRET || 'gym_secret_key',
     { expiresIn: '30d' }
   )

   const { password: _, ...userResponse } = user
   res.status(201).json({ 
     success: true, 
     token, 
     user: userResponse,
     message: 'Registration successful' 
   })
 } catch (error) {
   console.error('Registration error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

app.post('/api/auth/login', async (req, res) => {
 try {
   const { email, password } = req.body

   if (!email || !password) {
     return res.status(400).json({ error: 'Email and password are required' })
   }

   const user = users.find(u => u.email === email)
   if (!user) {
     return res.status(401).json({ error: 'Invalid credentials' })
   }

   const isValidPassword = await bcrypt.compare(password, user.password)
   if (!isValidPassword) {
     return res.status(401).json({ error: 'Invalid credentials' })
   }

   const token = jwt.sign(
     { userId: user.id, email: user.email, role: user.role },
     process.env.JWT_SECRET || 'gym_secret_key',
     { expiresIn: '30d' }
   )

   const { password: _, ...userResponse } = user
   res.json({ 
     success: true, 
     token, 
     user: userResponse 
   })
 } catch (error) {
   console.error('Login error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

app.get('/api/auth/me', authenticateToken, (req, res) => {
 try {
   const user = users.find(u => u.id === req.user.userId)
   if (!user) {
     return res.status(404).json({ error: 'User not found' })
   }

   const { password: _, ...userResponse } = user
   res.json({ user: userResponse })
 } catch (error) {
   console.error('Get user error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

// Products routes
app.get('/api/products', (req, res) => {
 try {
   const { category, search } = req.query
   let filteredProducts = products

   if (category && category !== 'all') {
     filteredProducts = filteredProducts.filter(p => p.category === category)
   }

   if (search) {
     filteredProducts = filteredProducts.filter(p => 
       p.name.toLowerCase().includes(search.toLowerCase()) ||
       p.description.toLowerCase().includes(search.toLowerCase())
     )
   }

   res.json({ products: filteredProducts })
 } catch (error) {
   console.error('Get products error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

app.get('/api/products/:id', (req, res) => {
 try {
   const product = products.find(p => p.id === parseInt(req.params.id))
   if (!product) {
     return res.status(404).json({ error: 'Product not found' })
   }
   res.json({ product })
 } catch (error) {
   console.error('Get product error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

// Booking routes
app.post('/api/bookings', authenticateToken, (req, res) => {
 try {
   const { service, date, time, message } = req.body
   
   if (!service || !date || !time) {
     return res.status(400).json({ error: 'Service, date and time are required' })
   }

   const booking = {
     id: bookings.length + 1,
     userId: req.user.userId,
     service,
     date,
     time,
     message: message || null,
     status: 'pending',
     createdAt: new Date().toISOString()
   }

   bookings.push(booking)
   res.status(201).json({ 
     success: true, 
     booking,
     message: 'Booking created successfully' 
   })
 } catch (error) {
   console.error('Create booking error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

app.get('/api/bookings', authenticateToken, (req, res) => {
 try {
   const userBookings = bookings
     .filter(b => b.userId === req.user.userId)
     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
   
   res.json({ bookings: userBookings })
 } catch (error) {
   console.error('Get bookings error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

// Transformations route
app.get('/api/transformations', (req, res) => {
 try {
   res.json({ transformations })
 } catch (error) {
   console.error('Get transformations error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

// Contact form
app.post('/api/contact', async (req, res) => {
 try {
   const { name, email, phone, message, service } = req.body
   
   if (!name || !email || !message) {
     return res.status(400).json({ error: 'Name, email and message are required' })
   }

   console.log('Contact form submission:', { name, email, phone, message, service })

   res.status(201).json({ 
     success: true,
     message: 'Thank you for your message! Vaibhav will get back to you within 24 hours.' 
   })
 } catch (error) {
   console.error('Contact form error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

// Stats for dashboard
app.get('/api/dashboard/stats', authenticateToken, (req, res) => {
 try {
   const userBookings = bookings.filter(b => b.userId === req.user.userId)
   const completedSessions = userBookings.filter(b => b.status === 'completed').length
   const upcomingSessions = userBookings.filter(b => b.status === 'confirmed' || b.status === 'pending').length
   
   res.json({
     totalSessions: userBookings.length,
     completedSessions,
     upcomingSessions,
     memberSince: users.find(u => u.id === req.user.userId)?.createdAt || new Date().toISOString()
   })
 } catch (error) {
   console.error('Get dashboard stats error:', error)
   res.status(500).json({ error: 'Internal server error' })
 }
})

// Error handling middleware
app.use((error, req, res, next) => {
 console.error(error.stack)
 res.status(500).json({
   error: 'Something went wrong!',
   message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
 })
})

// 404 handler
app.use('*', (req, res) => {
 res.status(404).json({ error: 'Route not found' })
})

// Start server
app.listen(PORT, '0.0.0.0', () => {
 console.log(`🏋️ Vaibhav Gym API running on port ${PORT}`)
 console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`)
 console.log(`💪 Ready to transform lives!`)
})
