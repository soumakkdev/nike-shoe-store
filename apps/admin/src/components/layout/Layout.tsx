import { LayoutDashboard, Menu, Package, ShoppingBag, Users } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { Sheet, SheetContent, cn } from 'ui'

const navigation = [
	{ name: 'Dashboard', href: '#', icon: LayoutDashboard, current: true },
	{ name: 'Products', href: '#', icon: Package, current: false },
	{ name: 'Orders', href: '#', icon: ShoppingBag, current: false },
	{ name: 'Customers', href: '#', icon: Users, current: false },
]

export default function Layout({ children }: { children: ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<div className="h-full">
			<Sheet open={sidebarOpen} onOpenChange={() => setSidebarOpen(false)}>
				<SheetContent side="left" className="p-0 bg-gray-900 text-white">
					<div className="flex grow flex-col gap-y-5 overflow-y-auto  px-6 pb-2 ring-1 ring-white/10">
						<div className="flex h-16 shrink-0 items-center">
							<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
						</div>
						<nav className="flex flex-1 flex-col">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-1">
										{navigation.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className={cn(
														item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
														'group flex gap-x-3 rounded-md px-3 py-2 text-sm leading-6 font-semibold'
													)}
												>
													<item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</SheetContent>
			</Sheet>

			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
					<div className="flex h-16 shrink-0 items-center">
						<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className={cn(
													item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
													'group flex gap-x-3 rounded-md px-3 py-2 text-sm leading-6 font-semibold'
												)}
											>
												<item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</li>

							<li className="-mx-6 mt-auto">
								<a
									href="#"
									className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
								>
									<img
										className="h-8 w-8 rounded-full bg-gray-800"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
									<span className="sr-only">Your profile</span>
									<span aria-hidden="true">Tom Cook</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
				<button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
					<span className="sr-only">Open sidebar</span>
					<Menu className="h-6 w-6" aria-hidden="true" />
				</button>
				<div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
				<a href="#">
					<span className="sr-only">Your profile</span>
					<img
						className="h-8 w-8 rounded-full bg-gray-800"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</a>
			</div>

			<main className="py-8 lg:pl-72 h-full">
				<div className="px-4 sm:px-6 lg:px-8">{children}</div>
			</main>
		</div>
	)
}
