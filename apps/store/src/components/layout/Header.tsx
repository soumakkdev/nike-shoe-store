import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Cart from '../cart/Cart'
import { useState } from 'react'
import CartButton from '../cart/CartButton'

export default function Header() {
	const [isCartOpen, setIsCartOpen] = useState(false)
	return (
		<header>
			<div className="flex items-center justify-between">
				<Link href="/">
					<Image width="80" height="80" src="/icons/nike-logo.svg" alt="Nike" />
				</Link>

				<div className="flex gap-1">
					<CartButton onClick={() => setIsCartOpen(true)} />

					<Link href="/login">
						<div className="hover:bg-slate-100 h-10 w-10 rounded-full grid place-content-center cursor-pointer">
							<User className="h-6 w-6" />
						</div>
					</Link>
				</div>
			</div>

			<Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
		</header>
	)
}
