import axios from "axios";
import { SYSCOM_API, SYSCOM_API_CLIENT, SYSCOM_API_SECRET,HOST } from "../config";

// section of categorias
export const categorias =  async (req, res )=>{
    try {
        
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    const response = await axios.get(`${SYSCOM_API}/categorias`,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    // console.log(response.data);
    return res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }

};
// obtain the categories from by id
export const categoriasID = async (req, res)=>{
    try {
        const {categoryId}= req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/categorias/${categoryId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
    
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
//section of marcas
//get marcas from api syscom
export const getMarcas = async (req, res) => {
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/marcas`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};

//get marcas by id
export const getMarcasById = async (req, res)=>{
    try {
        const {brandId}= req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/marcas/${brandId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
     console.log(response.data);
    res.json(response.data);
    
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};

export const getMarcasProducts = async (req, res) => {
    try {
        const {brandId}= req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/marcas/${brandId}/productos`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
     console.log(response.data);
    res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};

//section of products
// requiere this variables búsqueda, categorías, marcas
export const getProductos = async (req, res) =>{
    try {
        const {categoria, marca, busqueda} = req.query;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth:{
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    const apiUrl = `${SYSCOM_API}/productos?categoria=${categoria}&marca=${marca}`;
    const response = await axios.get(apiUrl,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    // console.log(response.data);
    return res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
}

export const getProductosById = async (req, res)=>{
    try {
        const {productId} = req.params;
        const {categoria, marca, busqueda} = req.query;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth:{
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    const apiUrl = `${SYSCOM_API}/productos/${productId}?categoria=${categoria}&marca=${marca}`;
    const response = await axios.get(apiUrl,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    // console.log(response.data);
    return res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};

export const getProductosRelacionados = async (req, res) =>{
    try {
        const {productId} = req.params;
        const {categoria, marca, busqueda} = req.query;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth:{
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    const apiUrl = `${SYSCOM_API}/productos/${productId}/relacionados?categoria=${categoria}&marca=${marca}`;
    const response = await axios.get(apiUrl,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    // console.log(response.data);
    return res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const getProductosAccesorios = async (req, res) =>{
    try {
        const {productId} = req.params;
        const {categoria, marca, busqueda} = req.query;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth:{
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    const apiUrl = `${SYSCOM_API}/productos/${productId}/accesorios?categoria=${categoria}&marca=${marca}`;
    const response = await axios.get(apiUrl,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    // console.log(response.data);
    return res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};

//section of utilities or money exchange
export const getUtilities = async (req, res) =>{
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/tipocambio`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
// section of bills
// we need the var anio and busqueda
export const getbills = async (req, res) => {
    try {
        const {anio, busqueda} = req.query;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth:{
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    const apiUrl = `${SYSCOM_API}/facturas?anio=${anio}`;
    const response = await axios.get(apiUrl,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    // console.log(response.data);
    return res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
//bills by ID
export const getBillsByID = async(req, res)=>{
    try {
        // const {anio, busqueda} = req.query;
        const {billsId} = req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth:{
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // const apiUrl = `${SYSCOM_API}/facturas/${billsId}`;
    const response = await axios.get(`${SYSCOM_API}/facturas/${billsId}`,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    // console.log(response.data);
    return res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};

// section of wishlists
export const wishlists = async (req, res) => {
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/wishlists`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
//create a new wishlists
export const newWishlists = async(req, res) => {
    try {
        const {nombre, productos} =req.body;

        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const apiUrl = `${SYSCOM_API}/wishlists`;
    const createWishlist = {
        nombre: "new wishlists testing ",
        productos: [
            87829,
            87828,
            75173
        ]
    }
    const response = await axios.post(apiUrl, createWishlist , 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
// section of wishlistsId
export const wishlistsId = async(req, res ) =>{
    try {
        const {wishlistsId}= req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/wishlists/${wishlistsId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
     console.log(response.data);
    res.json(response.data);
    
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }

};
export const deleteWishlists = async (req, res) => {
    try {
        const {deleteId}=req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.delete(`${SYSCOM_API}/wishlists/${deleteId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const AggProductWishlist = async (req, res) => {
    try {
        const {wishlistsId}= req.params;
        const {productId}= req.body;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.post(`${SYSCOM_API}/wishlists/${wishlistsId}/productos/${productId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
     console.log(response.data);
    res.json(response.data);
    
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const deleteProductWishlist = async (req, res) => {
    try {
        const {wishlistsId}= req.params;
        const {productId}= req.body;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.delete(`${SYSCOM_API}/wishlists/${wishlistsId}/productos/${productId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
     console.log(response.data);
    res.json(response.data);
    
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};




// section of carrito
// requiere other variables in this section
// export const carritoTrigger = async (req, res) => {
//     try {
//         const {tipo_entrega, direccion, metodo_pago, moneda, uso_cfdi} = req.body;
        
//         const params = new URLSearchParams()
//         params.append("grant_type", "client_credentials")


//         const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
//             headers:{
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             auth: {
//                 username: SYSCOM_API_CLIENT,
//                 password: SYSCOM_API_SECRET,
//         }
        
//     });
//     // console.log(access_token);
//     const response = await axios.get(`${SYSCOM_API}/carrito/generar`, 
//     {
//         headers:{
//             Authorization: `Bearer ${access_token}`, 
//         }
//     });
//     // console.log(response.data);
//     res.json(response.data);
        
//     } catch (error) {
//         return res.status(500).send("Something goes wrong");
//     }
// }
export const carritoAddress = async (req, res)=>{
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/direcciones`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};//get with same link as funtion down

export const carritoInsertAddress = async (req, res)=>{
    try {
        const {atencion_a, calle, colonia, num_ext, num_int, codigo_postal, ciudad, estado, pais, telefono } = req.body;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const apiUrl = `${SYSCOM_API}/carrito/direcciones`
    const newaddress = {
        atencion_a: 'yhoel',
        calle: 'cima oriente',
        colonia: 'La cuspide',
        num_ext: '70',
        num_int: '16',
        codigo_postal: '45200',
        ciudad: 'zapopan',
        estado: 'JAL',
        pais: 'MEX',
        telefono: '3321227074'
    };

    const response = await axios.post(apiUrl, newaddress, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};//post
export const carritoUpdateAddress = async (req, res)=>{
    try {
        
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/direcciones`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};//post
export const carritoDeleteAddress = async (req, res)=>{
    try {
        const {deleteId} = req.query;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.delete(`${SYSCOM_API}/carrito/direcciones/?id=${deleteId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};//delete
export const carritoCountry = async (req, res)=>{
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/paises`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const carritostate = async (req, res)=>{
    try {
        const {stateId}= req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/estados/${stateId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
     console.log(response.data);
    res.json(response.data);
    
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const carritoneighborhood = async (req, res)=>{
    try {
        const {NborhoodId}= req.params;
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/colonias/${NborhoodId}`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
     console.log(response.data);
    res.json(response.data);
    
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const carritoPayment = async (req, res)=>{
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/pago`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const carritoMovings = async (req, res)=>{
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/fleteras`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const carritoBranch = async (req, res)=>{
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/sucursales`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};
export const carritoCdfi = async (req, res)=>{
    try {
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")


        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    // console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/carrito/cfdi`, 
    {
        headers:{
            Authorization: `Bearer ${access_token}`, 
        }
    });
    // console.log(response.data);
    res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }
};




