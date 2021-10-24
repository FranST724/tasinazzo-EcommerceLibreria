import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
        <div>
            <CartWidget/>
            <nav class='navegador'>
                <ul class='nav-links'>
                    <li>
                        <a href="" class="pseudo">Home</a>
                    </li>
                    <li>
                        <a href="" class="pseudo">Nosotros</a>
                    </li>
                    <li>
                        <a href="" class="pseudo">Productos</a>
                    </li>
                    <li>
                        <a href="" class="pseudo">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    );
};

export default NavBar