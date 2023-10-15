import { formatCurrency } from '@/lib/helpers'
import { IProduct } from '@nike/types'
import Link from 'next/link'
import React from 'react'

interface IProductCard {
	product: IProduct
}

export default function ProductCard(props: IProductCard) {
	const { product } = props
	const variant = product.variants?.[0]
	return (
		<Link href={`products/${product.id}?variantId=${variant.id}`}>
			<figure className="h-[400px] mb-2">
				{/* TODO: add alt text */}
				<img src={variant.images[0]} alt="" className="h-full w-full object-cover" />
			</figure>
			<div className="flex items-center justify-between">
				<p className="font-medium">{product.name}</p>

				<p>{formatCurrency(variant.price)}</p>
			</div>
		</Link>
	)
}
