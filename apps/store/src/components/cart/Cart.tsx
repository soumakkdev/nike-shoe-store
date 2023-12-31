import { Button, Sheet, SheetContent, SheetHeader, SheetTitle } from '@nike/ui'
import React from 'react'
import CartList from './CartList'
import CartSummary from './CartSummary'
import useCart from './useCart'
import { Inbox } from 'lucide-react'

export default function Cart({ open, onClose }: { open: boolean; onClose: () => void }) {
	const { count } = useCart()
	return (
		<Sheet open={open} onOpenChange={onClose}>
			<SheetContent className="flex flex-col">
				<SheetHeader>
					<SheetTitle>Cart</SheetTitle>
				</SheetHeader>

				{count ? (
					<>
						<CartList />
						<CartSummary />
						<Button size="lg" className="w-full rounded-full">
							Place Order
						</Button>
					</>
				) : (
					<div className="w-full h-full flex flex-col justify-center items-center text-muted-foreground">
						<Inbox strokeWidth={1} className="h-12 w-12" />
						<p>Cart is empty</p>
					</div>
				)}
			</SheetContent>
		</Sheet>
	)
}
