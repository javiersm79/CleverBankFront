import React from 'react';

//import mi archivo css
import './NavBar.css';

const NavBar = () => {
    //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar

    //la lógica va siempre antes del return
    return (
        <header className="header">


            {/* links de navegación */}
            <nav>
                <ul className="nav-container">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/accountDetails">Consultar</a>
                    </li>
                    <li>
                        <a href="/">Retiro</a>
                    </li>
                    <li>
                        <a href="/">Deposito</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default NavBar;
