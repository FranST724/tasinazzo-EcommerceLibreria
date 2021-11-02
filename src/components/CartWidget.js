import iconoCarrito from '../assets/images/icons-cart.png'

const CartWidget = () => {
    return (
        <a href='index.html'>
            <img src={iconoCarrito} className='carrito'/>
        </a>
    )
}

export default CartWidget;