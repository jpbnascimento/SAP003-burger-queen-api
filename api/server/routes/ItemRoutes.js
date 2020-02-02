import { Router } from 'express';
import ItemController from '../controllers/ItemController';

const router = Router();
router.get('/', ItemController.getAllItens);
router.post('/', ItemController.addItem);
router.get('/:id', ItemController.getItem);
router.put('/:id', ItemController.updatedItem);
router.delete('/:id', ItemController.deleteItem);

export default router;