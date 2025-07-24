import React, { useState, useEffect } from 'react'

const CartNotification = ({ show, productName, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      right: '30px',
      background: 'rgba(34, 197, 94, 0.95)',
      backdropFilter: 'blur(20px)',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      zIndex: 1001,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      animation: 'slideIn 0.3s ease-out'
    }}>
      <span style={{ fontSize: '20px' }}>✅</span>
      <div>
        <div style={{ fontWeight: '600', fontSize: '16px' }}>Added to Cart!</div>
        <div style={{ fontSize: '14px', opacity: 0.9 }}>{productName}</div>
      </div>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '18px',
          cursor: 'pointer',
          marginLeft: '8px'
        }}
      >
        ×
      </button>
      
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default CartNotification
