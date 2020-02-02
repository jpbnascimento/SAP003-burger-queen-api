import { Router } from 'express'
import PedidosController from '../controllers/PedidosController'

const router = Router()
router.get('/', PedidosController.getAllPedidos)
router.post('/', PedidosController.addPedidos)
router.get('/:id', PedidosController.getPedidos)
router.put('/:id', PedidosController.updatedPedidos)
router.delete('/:id', PedidosController.deletePedidos)
export default router