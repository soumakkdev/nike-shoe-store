import Image from 'next/image'
import React from 'react'

export default function Header() {
	return (
		<header>
			<div className="flex items-center justify-between">
				<div>
					<Image width="60" height="60" src="/icons/nike-logo.svg" alt="Nike" />
				</div>

				<div className="hover:bg-slate-100 h-10 w-10 rounded-full grid place-content-center cursor-pointer">
					<Image width="24" height="24" src="/icons/bag.svg" alt="Nike" />
				</div>
			</div>
		</header>
	)
}
