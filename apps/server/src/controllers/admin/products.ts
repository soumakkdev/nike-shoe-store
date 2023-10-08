import { NextFunction, Request, Response } from 'express'
import prisma from '../../lib/prisma'
import createHttpError from 'http-errors'

export async function getProducts(req: Request, res: Response, next: NextFunction) {
	try {
		const products = await prisma.product.findMany()
		res.json({ data: products })
	} catch (error: any) {
		next(createHttpError.InternalServerError(error.message || 'Error fetching products'))
	}
}

export function getProduct() {}
export function addProduct() {}
export function editProduct() {}
export function deleteProduct() {}
