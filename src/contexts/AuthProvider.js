import React from 'react'
import { createContext } from 'react'
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

function AuthProvider({children}) {
    const allContext = useFirebase();
  return (
    <div>
        <AuthContext.Provider value={allContext}>
                {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider