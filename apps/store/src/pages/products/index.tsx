import Header from '@/components/layout/Header'
import ProductsList from '@/components/products/ProductsList'
import React from 'react'

export default function ProductsPage() {
	return (
		<section className="max-w-7xl mx-auto px-2 lg:px-4">
			<Header />
			<ProductsList />
		</section>
	)
}
