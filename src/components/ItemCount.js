import React, {useState} from 'react'

export const ItemCount = () => {
    const [valor, setValor] = useState(1)
    const suma = () => {
        setValor(valor + 1)
    }
    const resta = () => {
        if (valor === 0){
            return valor
        } else {
            setValor(valor - 1)
        }
    }
    return (
        <div>
            <button onClick={suma}>Click para sumar</button>
            <button onClick={resta}>Click para restar</button>
        </div>
    )
}