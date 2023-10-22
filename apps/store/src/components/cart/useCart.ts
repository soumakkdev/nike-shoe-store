import { IOrderItem, IProduct, IProductVariant } from '@nike/types'
import { produce } from 'immer'
import { atom, useAtom } from 'jotai'
import { toInt } from 'radash'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const cartItemsAtom = atom<IOrderItem[]>([])

export default function useCart() {
	const [cartItems, setCartItems] = useAtom(cartItemsAtom)

	function addItemToCart(product: IProduct, variant: IProductVariant) {
		setCartItems(
			produce((draft) => {
				const alreadyPresentItem = draft.find((item) => item.productId === product.id && item.variantId === variant.id)
				if (alreadyPresentItem) {
					// item already present in cart
					toast.error('This product is already present in cart')
				} else {
					draft.push({
						// id: getId(),
						category: product.category,
						name: product.name,
						description: product.description,
						status: product.status,
						productId: product.id,
						color: variant.color,
						images: variant.images,
						price: variant.price,
						sku: variant.sku,
						variantId: variant.id,
					})
				}
			})
		)
	}

	function removeItemFromCart(index: number) {
		setCartItems(
			produce((draft) => {
				draft.splice(index, 1)
			})
		)
	}

	const summary = useMemo(() => {
		let subtotal = 0
		cartItems?.forEach((cartItem) => {
			subtotal += toInt(cartItem.price)
		})
		const deliveryCharge = 50
		const total = subtotal + deliveryCharge
		return {
			subtotal,
			deliveryCharge,
			total,
		}
	}, [cartItems])

	return {
		cartItems,
		removeItemFromCart,
		addItemToCart,
		summary,
		count: cartItems.length,
	}
}
