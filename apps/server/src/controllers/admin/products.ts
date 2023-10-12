import { NextFunction, Request, Response } from 'express'
import prisma from '../../lib/prisma'
import createHttpError from 'http-errors'
import { IAddProductReq } from '@nike/types'

export async function getProducts(req: Request, res: Response, next: NextFunction) {
	try {
		const products = await prisma.product.findMany({
			include: {
				variants: true,
			},
		})
		res.json({ data: products })
	} catch (error: any) {
		next(createHttpError.InternalServerError(error.message || 'Error fetching products'))
	}
}

export function getProduct() {}
export async function addProduct(req: Request, res: Response, next: NextFunction) {
	const { name, status, description, variants } = req.body as IAddProductReq
	try {
		const newProduct = await prisma.product.create({
			data: {
				name,
				status,
				description,
			},
		})

		const productId = newProduct.id

		const variantsData = variants?.map((variant) => ({
			color: variant.color,
			price: variant.price,
			productId,
			sku: variant.sku,
			images: variant.images,
		}))

		await prisma.productVariant.createMany({
			data: variantsData,
		})

		const productRes = await prisma.product.findUnique({
			where: {
				id: productId,
			},
			include: {
				variants: true,
			},
		})

		res.json({ data: productRes })
	} catch (error: any) {
		next(createHttpError.InternalServerError(error.message || 'Error adding product'))
	}
}
export function editProduct() {}
export function deleteProduct() {}
