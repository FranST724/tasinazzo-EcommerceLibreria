import React, { useState, createContext } from 'react';

export const CartContext = createContext()

export const useCartContext = ()=> useCartContext(CartContext)

function CacheProvider({defaultValue = [], children}) {
    const [lista, setLista] = useState(defaultValue);

    function getFromLista(id) {
        return lista.find(obj => obj.id === id)
    }

    function isOnLista(obj, lista) {
        return lista.map(item => item.id).includes(obj.id)
    }

     function addToLista(obj) {
         if (!isOnLista(obj, lista)) {
             setLista([...lista,obj]);
         } else {console.log('Ya existe la lista')}
     }

    
    const precioTotal =()=>{
        return lista.reduce((acum, prod) => acum + (prod.cantidad * prod.price), 0)
    }

    const borrarItem = (id) => {
        setLista( lista.filter(prod => prod.id !== id))
    }

    const borrarElCarrito = () => {
        setLista([])
    }

    return <CartContext.Provider value={{ 
        lista, 
        addToLista, 
        listaSize: 
        lista.length,
        precioTotal,
        borrarElCarrito,
        borrarItem
        }}>
        {children}
    </CartContext.Provider>
}

export default CacheProvider