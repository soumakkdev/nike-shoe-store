import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { Input, Button } from 'ui'
import { FormikField } from '../components/utils/FormikField'
import { useAuth } from '../lib/AuthContext'
import { ILoginParams } from '../types/auth'
import { tryit } from 'radash'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import useLoading from '../hooks/useLoading'

export default function Login() {
	const { replace } = useRouter()
	const { loading, startLoading, stopLoading } = useLoading()
	const { emailPasswordLogin } = useAuth()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
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
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={formik.handleSubmit}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<FormikField name="email">
									<Input id="email" type="email" autoComplete="email" required />
								</FormikField>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="text-sm">
									<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<FormikField name="password">
									<Input id="password" type="password" autoComplete="current-password" required />
								</FormikField>
							</div>
						</div>

						<div>
							<Button
								type="submit"
								loading={loading}
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{loading ? 'Hold on' : 'Sign in'}
							</Button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{' '}
						<a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Start a 14 day free trial
						</a>
					</p>
				</div>
			</div>
		</FormikProvider>
	)
}
