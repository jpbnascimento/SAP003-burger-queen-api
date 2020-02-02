import { Router } from 'express'
import ProdutosController from '../controllers/ProdutosController'

const router = Router()
router.get('/', ProdutosController.getAllProdutos)
router.post('/', ProdutosController.addProdutos)
router.get('/:id', ProdutosController.getProdutos)
router.put('/:id', ProdutosController.updatedProdutos)
router.delete('/:id', ProdutosController.deleteProdutos)
export default router