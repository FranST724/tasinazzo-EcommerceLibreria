import {useCartContext} from './cartcontext'

const Cart = () => {

    const { cartList, precioTotal, borrarElCarrito } = useCartContext()

    console.log(cartList)
    return (
        <div>
            <h2>Carrito</h2>
            {cartList.map(prod => <li>{prod.name} {prod.cantidad}</li>)}
            {`Precio total: ${precioTotal()}`}
            <button onClick={()=> borrarElCarrito()}>borrar el carrito</button>
        </div>
    )
}

export default Cart