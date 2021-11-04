const productos = [
    {id: 1, 
    foto:'https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.jpg', 
    name: 'Harry Potter', 
    autor: 'J.K Rowling', 
    price: 1500,
    stock: 10},

    {id: 2, 
    foto:'https://http2.mlstatic.com/D_NQ_NP_951620-MLA43677613114_102020-O.jpg', 
    name: 'Dune', 
    autor:'Frank Herbert', 
    price: 2200,
    stock: 6},

    {id: 3, 
    foto:'https://www.bookshop.com.uy/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/97895064422791.jpg', 
    name: 'Juego de tronos', 
    autor:'George R.R. Martin', 
    price: 2600,
    stock: 15},
];

const getFetch = new Promise ((resolve, reject)=>{
    // tareas asincronicas acciones
    setTimeout(()=>{
        resolve(productos)
    }, 5000)
    //reject('400 not found')
})

export default getFetch