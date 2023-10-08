import express from 'express'

const router = express.Router()

router.get('/products')
router.get('/products/:productId')

export default router
