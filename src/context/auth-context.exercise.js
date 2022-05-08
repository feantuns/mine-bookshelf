import React from 'react'
// 🐨 create and export a React context variable for the AuthContext
// 💰 using React.createContext
export const AuthContext = React.createContext()

export const useAuth = () => {
  const auth = React.useContext(AuthContext)
  if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return auth
}
