const productos = [
    {id: 1, foto:'https://static.wikia.nocookie.net/esharrypotter/images/9/9a/Harry_Potter_y_la_Piedra_Filosofal_Portada_Espa%C3%B1ol.PNG/revision/latest?cb=20151020165725', name: 'libro', price: 2000},
    {id: 2, foto:'https://static.wikia.nocookie.net/esharrypotter/images/9/9a/Harry_Potter_y_la_Piedra_Filosofal_Portada_Espa%C3%B1ol.PNG/revision/latest?cb=20151020165725', name: 'libro2', price: 2000},
    {id: 3, foto:'https://static.wikia.nocookie.net/esharrypotter/images/9/9a/Harry_Potter_y_la_Piedra_Filosofal_Portada_Espa%C3%B1ol.PNG/revision/latest?cb=20151020165725', name: 'libro3', price: 2000}
];

export const getFetch = new Promise ((resolve, reject)=>{
    // tareas asincronicas acciones
    setTimeout(()=>{
        resolve(productos)
    }, 5000)
    //reject('400 not found')
})