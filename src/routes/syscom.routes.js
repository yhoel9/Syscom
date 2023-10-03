import {Router}  from 'express';

import { AggProductWishlist, carritoAddress, carritoBranch, carritoCdfi, carritoCountry, carritoDeleteAddress, carritoInsertAddress, carritoMovings, carritoPayment, carritoTrigger, carritoUpdateAddress, carritoneighborhood, carritostate, categorias, categoriasID, deleteWishlists, getBillsByID, getMarcas, getMarcasById, getMarcasProducts, getProductos, getProductosAccesorios, getProductosById, getProductosRelacionados, getUtilities, getbills, newWishlists, wishlists, wishlistsId } from '../controllers/syscom.controllers';

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
router.post('/wishlists', newWishlists);
router.get('/wishlists/:wishlistsId', wishlistsId);
router.delete('/wishlists/:deleteId', deleteWishlists);
router.post('/wishlists/:whislistsId/productos/:productId', AggProductWishlist);
//bills
router.get('/facturas', getbills);
router.get('/facturas/:billsId',getBillsByID);
//carrito
// router.get('/carrito/generar', carritoTrigger);
router.get('/carrito/direcciones', carritoAddress);
router.post('/carrito/direcciones', carritoInsertAddress);
router.post('/carrito/direcciones/{id}', carritoUpdateAddress);
router.delete('/carrito/direcciones/', carritoDeleteAddress);
router.get('/carrito/paises', carritoCountry);
router.get('/carrito/estados/:stateId', carritostate);
router.get('/carrito/colonias/:NborhoodId', carritoneighborhood);
router.get('/carrito/pago', carritoPayment);
router.get('/carrito/fleteras', carritoMovings);
router.get('/carrito/sucursales', carritoBranch);
router.get('/carrito/cfdi', carritoCdfi);

export default router;