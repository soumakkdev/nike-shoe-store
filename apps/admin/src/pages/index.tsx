import { Inter } from 'next/font/google'
import Layout from '../components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return <main className={`${inter.className}`}></main>
}

Home.getLayout = (page) => <Layout>{page}</Layout>
