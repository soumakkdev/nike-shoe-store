import z from 'zod'

export const ZAddProductVariantReq = z.object({
	color: z.string(),
	price: z.number(),
	sku: z.string(),
	images: z.string().array(),
})
export type IAddProductVariantReq = z.infer<typeof ZAddProductVariantReq>

export const ZAddProductReq = z.object({
	name: z.string(),
	description: z.string().optional().nullable(),
	category: z.string().optional().nullable(),
	status: z.string(),
	variants: ZAddProductVariantReq.array(),
})
export type IAddProductReq = z.infer<typeof ZAddProductReq>

export const ZProductVariant = ZAddProductVariantReq.extend({
	id: z.number(),
})
export type IProductVariant = z.infer<typeof ZProductVariant>

export const ZProduct = ZAddProductReq.extend({
	id: z.number(),
	createdAt: z.string(),
	variants: ZProductVariant.array(),
})
export type IProduct = z.infer<typeof ZProduct>

export const ZOrderItem = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string().optional().nullable(),
	category: z.string().optional().nullable(),
	status: z.string(),
	size: z.string().optional().nullable(),
	color: z.string(),
	price: z.number(),
	sku: z.string(),
	variantId: z.number(),
	productId: z.number(),
	images: z.string().array(),
})
export type IOrderItem = z.infer<typeof ZOrderItem>
