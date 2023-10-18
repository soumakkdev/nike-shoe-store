import { FieldArray, FormikProvider, useFormik } from 'formik'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, FormikField, InputBox } from '@nike/ui'

export default function AddImagesDialog({
	open,
	onClose,
	onConfirm,
	initialValues,
}: {
	open: boolean
	onClose: () => void
	onConfirm: (images: string[]) => void
	initialValues?: string[]
}) {
	const formik = useFormik({
		initialValues: { images: initialValues ?? [''] },
		onSubmit,
	})

	function onSubmit(values) {
		onConfirm(values.images)
		onClose()
	}

	return (
		<Dialog open={open} onOpenChange={() => onClose()}>
			<FormikProvider value={formik}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Add Variant Images</DialogTitle>
					</DialogHeader>

					<div className="space-y-3">
						<FieldArray name="images">
							{({ push, remove }) => (
								<>
									{formik.values?.images?.map((image, index) => (
										<div key={index} className="flex items-center gap-3">
											<FormikField name={`images.${index}`}>
												<InputBox placeholder="Image URL" />
											</FormikField>
											<Trash2 onClick={() => remove(index)} />
										</div>
									))}

									<Button size="sm" variant="outline" onClick={() => push('')}>
										Add New
									</Button>
								</>
							)}
						</FieldArray>
					</div>

					<DialogFooter>
						<Button variant="secondary" onClick={onClose}>
							Cancel
						</Button>
						<Button onClick={() => formik.handleSubmit()}>Confirm</Button>
					</DialogFooter>
				</DialogContent>
			</FormikProvider>
		</Dialog>
	)
}
