import {Router}  from 'express';

import { categorias, categoriasID } from '../controllers/syscom.controllers';

const router = Router();

router.get('/categorias', categorias);
router.get('/categorias/:categoryId', categoriasID);


export default router;