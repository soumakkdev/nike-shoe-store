import type { AppProps } from 'next/app'
import 'ui/dist/index.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	const getLayout = (Component as any).getLayout ?? ((page) => page)
	return getLayout(<Component {...pageProps} />)
}
