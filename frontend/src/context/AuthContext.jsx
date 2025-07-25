import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
 const context = useContext(AuthContext)
 if (!context) {
   throw new Error('useAuth must be used within an AuthProvider')
 }
 return context
}

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null)
 const [isAuthenticated, setIsAuthenticated] = useState(false)

 const login = async (email, password) => {
   // Mock login
   setUser({ name: 'User', email })
   setIsAuthenticated(true)
   return { success: true }
 }

 const logout = () => {
   setUser(null)
   setIsAuthenticated(false)
 }

 const value = { user, isAuthenticated, login, logout }

 return (
   <AuthContext.Provider value={value}>
     {children}
   </AuthContext.Provider>
 )
}
