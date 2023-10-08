import express from 'express'
import { addProduct, deleteProduct, editProduct, getProduct, getProducts } from '../controllers/admin/products'

const router = express.Router()

router.get('/products', getProducts)
router.post('/products', addProduct)
router.put('/products/:productId', editProduct)
router.delete('/products/:productId', deleteProduct)

export default router
