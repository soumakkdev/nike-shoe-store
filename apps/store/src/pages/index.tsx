import ProductsSlider from '@/components/home/ProductsSlider'
import Header from '@/components/layout/Header'
import { useProducts } from '@/components/products/Products.query'

export default function Home() {
	const { data } = useProducts()
	const {} = useProducts()
	return (
		<section className="container">
			<Header />
			<ProductsSlider products={data} />
		</section>
	)
}
