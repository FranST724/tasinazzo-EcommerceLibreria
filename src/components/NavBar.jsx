import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
        <div>
            <CartWidget/>
            <nav class='navegador'>
                <ul class='nav-links'>
                    <li>
                        <Link to='/' class="pseudo">Home</Link>
                    </li>
                    <li>
                        <Link to='/nosotros' class="pseudo">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/productos" class="pseudo">Productos</Link>
                    </li>
                    <li>
                        <Link to="/contacto" class="pseudo">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    );
};

export default NavBar