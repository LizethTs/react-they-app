import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navBarContainer'>
            <div className='navBarBrand'>
                <h2>THEY</h2>
            </div>
           <div className='navBarMenu'>
                <ul className='navBarItems'>
                    <li className='navBarItem'>
                        <a className='navBarLink' href="#">Home</a>
                    </li>
                    <li className='navBarItem'>
                        <a className='navBarLink' href="#">Productos</a>
                    </li>
                    <li className='navBarItem'>
                        <a className='navBarLink' href="#">Novedades</a>
                    </li>
                    <li className='navBarItem'>
                        <a className='navBarLink' href="#">Contacto</a>
                    </li>
                    <CartWidget/>
                </ul>
           </div>
        </div>
    )
}

export default NavBar;
