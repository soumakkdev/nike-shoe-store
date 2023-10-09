import { Button } from 'ui'
import Layout from '../../components/layout/Layout'
import Link from 'next/link'

export default function Products() {
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
