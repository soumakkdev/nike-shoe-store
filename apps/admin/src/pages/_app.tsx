import type { AppProps } from 'next/app'
import 'ui/dist/index.css'
import { AuthProvider } from '../lib/AuthContext'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
	const getLayout = (Component as any).getLayout ?? ((page) => page)
	return (
		<AuthProvider>
			{getLayout(<Component {...pageProps} />)}
			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={{
					duration: 5000,
				}}
			/>
		</AuthProvider>
	)
}
