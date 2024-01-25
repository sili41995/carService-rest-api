import express from 'express';
import { getAll, getById } from '../../controllers/adverts';
import isValidId from '../../middlewares/isValidId';

const router = express.Router();

router.get('/', getAll);
router.get('/:advertId', isValidId, getById);

export default router;
