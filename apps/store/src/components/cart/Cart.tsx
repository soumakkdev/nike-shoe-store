import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@nike/ui'
import React from 'react'
import CartList from './CartList'

export default function Cart({ open, onClose }: { open: boolean; onClose: () => void }) {
	return (
		<Sheet open={open} onOpenChange={onClose}>
			<SheetContent className="flex flex-col">
				<SheetHeader>
					<SheetTitle>Cart</SheetTitle>
				</SheetHeader>

				<CartList />
			</SheetContent>
		</Sheet>
	)
}
