import React, { useState, createContext } from 'react';

export const CartContext = createContext()

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

    return <CartContext.Provider value={{ lista, addToLista, listaSize: lista.length}}>
        {children}
    </CartContext.Provider>
}

export default CacheProvider