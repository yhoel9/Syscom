import {Router}  from 'express';

import { categorias, categoriasID, getBillsByID, getMarcas, getMarcasById, getMarcasProducts, getProductos, getProductosAccesorios, getProductosById, getProductosRelacionados, getUtilities, getbills, wishlists, wishlistsId } from '../controllers/syscom.controllers';

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
router.get('/productos/:productId', getProductosById);
router.get('/productos/:productId/relacionados', getProductosRelacionados);
router.get('/productos/:productId/accesorios', getProductosAccesorios);
//money exchange 
router.get('/tipocambio', getUtilities);
//wishlists
router.get('/wishlists', wishlists);
router.get('/wishlists/:wishlistsId', wishlistsId);
//bills
router.get('/facturas', getbills);
router.get('/facturas/:billsId',getBillsByID);


export default router;