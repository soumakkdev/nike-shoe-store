import Header from '@/components/layout/Header'
import { useProducts } from '@/components/products/Products.query'
import { Button } from '@nike/ui'
import Link from 'next/link'

export default function Home() {
	const {} = useProducts()
	return (
		<section>
			<Header />

			<Link href="/products">
				<Button>View All Products</Button>
			</Link>
		</section>
	)
}
