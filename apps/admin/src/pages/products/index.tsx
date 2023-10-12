import { Button } from 'ui'
import Layout from '../../components/layout/Layout'
import Link from 'next/link'
import { useProducts } from '@/components/products/Products.query'

export default function Products() {
	const { data: products, isLoading } = useProducts()
	return (
		<Layout
			title="Products"
			action={
				<Link href="/products/add">
					<Button>Add Product</Button>
				</Link>
			}
		>
			Hi
		</Layout>
	)
}
