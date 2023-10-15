import { useRouter } from 'next/router'
import React from 'react'
import { useProductDetails } from './Products.query'
import { toInt } from 'radash'
import { formatCurrency } from '@/lib/helpers'

interface IProductDetailsQuery {
	productId: string
	variantId: string
}

export default function ProductDetails() {
	const { query } = useRouter()
	const { productId, variantId } = query as unknown as IProductDetailsQuery
	const { data: product, isLoading } = useProductDetails(productId)

	const variant = product?.variants?.find((variant) => variant.id === toInt(variantId))

	if (isLoading) return <p>Loading...</p>

	return (
		<div className="grid grid-cols-5 gap-5">
			<figure className="col-span-3">
				<img src={variant?.images[0]} alt="" />
			</figure>

			<article className="col-span-2">
				<h3 className="font-medium text-2xl">{product?.name}</h3>
				<p className="space-x-2">
					<span>MRP</span>
					<span>{formatCurrency(variant.price)}</span>
				</p>
				<p>{product.description}</p>
			</article>
		</div>
	)
}
