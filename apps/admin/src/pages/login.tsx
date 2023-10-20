import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { InputBox, Button, FormikField, Checkbox } from '@nike/ui'
import { useAuth } from '../lib/AuthContext'
import { ILoginParams } from '../types/auth'
import { tryit } from 'radash'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import useLoading from '../hooks/useLoading'
import Image from 'next/image'

export default function Login() {
	const { replace } = useRouter()
	const { loading, startLoading, stopLoading } = useLoading()
	const { emailPasswordLogin } = useAuth()
	const formik = useFormik({
		initialValues: {
			email: 'admin@nike.com',
			password: 'nike@admin',
		},
		onSubmit,
	})

	async function onSubmit(values: ILoginParams) {
		startLoading()
		const [err, res] = await tryit(emailPasswordLogin)(values)
		stopLoading()

		if (err) {
			// TODO: getting firebase error codes, need to send readable error messages
			return toast.error(err.message)
		}

		replace('/')
	}

	return (
		<FormikProvider value={formik}>
			<div className="h-full flex items-center justify-center">
				<div className="max-w-sm flex-1 mx-auto px-3">
					<Image width="80" height="80" src="/icons/nike-logo.svg" alt="Nike" className="mx-auto" />
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to admin dashboard</h2>

					<form className="space-y-4 mt-8" onSubmit={formik.handleSubmit}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<FormikField name="email">
									<InputBox id="email" type="email" size="lg" autoComplete="email" required />
								</FormikField>
							</div>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
								Password
							</label>
							<div className="mt-2">
								<FormikField name="password">
									<InputBox id="password" size="lg" type="password" autoComplete="current-password" required />
								</FormikField>
							</div>
						</div>

						<Checkbox label="Remember me" />

						<div>
							<Button
								type="submit"
								size="lg"
								loading={loading}
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{loading ? 'Hold on' : 'Sign in'}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</FormikProvider>
	)
}
