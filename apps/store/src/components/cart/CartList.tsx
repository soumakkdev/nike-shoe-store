import React from 'react'
import useCart from './useCart'
import { formatCurrency } from '@/lib/helpers'

export default function CartList() {
	const { cartItems } = useCart()
	return (
		<div className="divide-y overflow-auto flex-1">
			{cartItems?.map((cartItem, idx) => {
				return (
					<div key={idx} className="py-3 flex gap-3">
						<figure>
							<img src={cartItem.images[0]} alt="" width={80} />
						</figure>
						<div>
							<p className="font-medium">{cartItem.name}</p>
							<p className="text-sm text-muted-foreground">{cartItem.color}</p>
							<p>MRP: {formatCurrency(cartItem.price)}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}
