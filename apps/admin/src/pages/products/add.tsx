import { Button, InputBox, Select, Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@nike/ui'
import Layout from '@/components/layout/Layout'
import { useRouter } from 'next/router'
import { FieldArray, FormikProvider, useFormik } from 'formik'
import { FormikField } from '@/components/utils/FormikField'
import AddImagesDialog from '@/components/products/AddImagesDialog'
import { useState } from 'react'
import { useAddProduct } from '@/components/products/Products.query'

enum ProductStatus {
	Active = 'active',
	Draft = 'draft',
}

const statusOptions = [
	{
		label: 'Active',
		value: ProductStatus.Active,
	},
	{
		label: 'Draft',
		value: ProductStatus.Draft,
	},
]

export default function AddProduct() {
	const { back } = useRouter()
	const { mutate: addProduct } = useAddProduct()
	const [selectedVariantForAddImages, setSelectedVariantForAddImages] = useState(null)

	const formik = useFormik({
		initialValues: { name: '', description: '', status: ProductStatus.Draft, variants: [{}] },
		onSubmit,
	})

	function onSubmit(values) {
		console.log(values)
		addProduct(
			{
				body: values,
			},
			{
				onSuccess: (data) => {
					console.log(data)
				},
				onError: (err) => {
					console.log(err)
				},
			}
		)
	}

	return (
		<Layout
			title="Add Product"
			action={
				<>
					<Button onClick={back} variant="secondary">
						Cancel
					</Button>
					<Button onClick={() => formik.handleSubmit()}>Confirm</Button>
				</>
			}
		>
			<FormikProvider value={formik}>
				<div className="max-w-sm space-y-3">
					<FormikField name="name">
						<InputBox label="Name" />
					</FormikField>
					<FormikField name="description">
						<InputBox label="Description" />
					</FormikField>
					<FormikField name="status">
						<Select label="Status" options={statusOptions} onChange={() => {}} />
					</FormikField>
				</div>

				<h3>Variants</h3>

				<FieldArray name="variants">
					{({ push }) => (
						<>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Variant</TableHead>
										<TableHead>Price</TableHead>
										<TableHead>SKU</TableHead>
										<TableHead>Images</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{formik.values.variants?.map((variant, index) => (
										<TableRow key={index}>
											<TableCell>
												<FormikField name={`variants.${index}.color`}>
													<InputBox size="sm" placeholder="Color" />
												</FormikField>
											</TableCell>
											<TableCell>
												<FormikField name={`variants.${index}.price`}>
													<InputBox size="sm" type="number" placeholder="₹ 0" />
												</FormikField>
											</TableCell>
											<TableCell>
												<FormikField name={`variants.${index}.sku`}>
													<InputBox size="sm" placeholder="e.g. 4234234" />
												</FormikField>
											</TableCell>
											<TableCell>
												<Button size="sm" variant="outline" onClick={() => setSelectedVariantForAddImages(index)}>
													Add image
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>

							<Button size="sm" variant="outline" onClick={() => push({})}>
								Add New
							</Button>
						</>
					)}
				</FieldArray>
			</FormikProvider>

			{selectedVariantForAddImages !== null ? (
				<AddImagesDialog
					open={selectedVariantForAddImages !== null}
					initialValues={formik.values?.variants[selectedVariantForAddImages]?.images}
					onClose={() => setSelectedVariantForAddImages(null)}
					onConfirm={(images) => {
						formik.setFieldValue(`variants.${selectedVariantForAddImages}.images`, images)
					}}
				/>
			) : null}
		</Layout>
	)
}
