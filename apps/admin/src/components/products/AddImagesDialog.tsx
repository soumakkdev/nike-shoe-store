import React from 'react'
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from 'ui'

export default function AddImagesDialog({ open, onClose, onConfirm }: { open: boolean; onClose: () => void; onConfirm: () => void }) {
	return (
		<Dialog open={open} onOpenChange={() => onClose()}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add Variant Images</DialogTitle>
				</DialogHeader>

				<div></div>

				<DialogFooter>
					<Button variant="secondary" onClick={onClose}>
						Cancel
					</Button>
					<Button onClick={onConfirm}>Confirm</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
