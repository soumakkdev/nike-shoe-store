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
	status: z.string(),
	variants: ZAddProductVariantReq.array(),
})
export type IAddProductReq = z.infer<typeof ZAddProductReq>
