import {Router}  from 'express';

import { categorias, categoriasID, getMarcas, getMarcasById, getMarcasProducts, getProductos, getUtilities, getbills, wishlists, wishlistsId } from '../controllers/syscom.controllers';

const router = Router();

//routes
//categories
router.get('/categorias', categorias);
router.get('/categorias/:categoryId', categoriasID);
//brands
router.get('/marcas', getMarcas);
router.get('/marcas/:brandId' , getMarcasById);
router.get('/marcas/:brandId/productos', getMarcasProducts);
//products
router.get('/productos', getProductos);
//money exchange 
router.get('/tipocambio', getUtilities);
//wishlists
router.get('/wishlists', wishlists);
router.get('/wishlists/:wishlistsId', wishlistsId);
//bills
router.get('/facturas', getbills);


export default router;