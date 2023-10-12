import { ZAddProductReq } from '@nike/types'
import express from 'express'
import { addProduct, deleteProduct, editProduct, getProducts } from '../controllers/admin/products'
import { validateReqBody } from '../middlewares/validateZod'
import { verifyAdminAuth } from '../middlewares/verifyAuth'

const router = express.Router()

router.get('/products', verifyAdminAuth, getProducts)
router.post('/products', verifyAdminAuth, validateReqBody(ZAddProductReq), addProduct)
router.put('/products/:productId', verifyAdminAuth, editProduct)
router.delete('/products/:productId', verifyAdminAuth, deleteProduct)

export default router
