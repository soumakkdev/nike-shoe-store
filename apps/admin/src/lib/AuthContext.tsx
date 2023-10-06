import { User, signInWithEmailAndPassword } from 'firebase/auth'
import { useContext } from 'react'
import { useState } from 'react'
import { ReactNode } from 'react'
import { createContext } from 'react'
import { auth } from './firebase'
import { ILoginParams } from '../types/auth'

interface IAuthContext {
	user: User | null
	emailPasswordLogin: (params: ILoginParams) => void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)

	const emailPasswordLogin = async (params: ILoginParams) => {
		const userCredential = await signInWithEmailAndPassword(auth, params.email, params.password)
	}

	const contextValues = { user, emailPasswordLogin }
	return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
