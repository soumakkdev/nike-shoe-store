import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
	return (
		<header>
			<div className="flex items-center justify-between">
				<Link href="/">
					<Image width="80" height="80" src="/icons/nike-logo.svg" alt="Nike" />
				</Link>

				<div className="flex gap-1">
					<div className="hover:bg-slate-100 h-10 w-10 rounded-full grid place-content-center cursor-pointer">
						<Image width="24" height="24" src="/icons/bag.svg" alt="cart" />
					</div>
					<Link href="/login">
						<div className="hover:bg-slate-100 h-10 w-10 rounded-full grid place-content-center cursor-pointer">
							<User className="h-6 w-6" />
						</div>
					</Link>
				</div>
			</div>
		</header>
	)
}
