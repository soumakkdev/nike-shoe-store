import { Button, InputBox } from '@nike/ui'
import Image from 'next/image'
import React from 'react'

export default function LoginPage() {
	return (
		<div className="grid place-content-center h-full">
			<div className="max-w-md mx-auto px-4">
				<Image width="80" height="80" src="/icons/nike-logo.svg" alt="Nike" />

				<div className="space-y-4">
					<h1 className="text-2xl font-semibold">Welcome to Nike</h1>
					<InputBox label="Email" size="lg" />
					<InputBox label="Password" type="password" size="lg" />
					<p className="text-sm">By continuing, I agree to Nike&apos;s Privacy Policy and Terms of Use.</p>
					<Button className="rounded-full" size="lg">
						Sign in
					</Button>
				</div>
			</div>
		</div>
	)
}
