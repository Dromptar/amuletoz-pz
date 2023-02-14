import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({dropdown}) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable is-size-4">
            <a className="navbar-link">
              Nuestros Productos
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item">
                Gargantillas
              </a>
              <a className="navbar-item">
                Pulseras
              </a>
              <a className="navbar-item">
                Cogantes
              </a>
              <hr className="navbar-divider" />
              <Link to="/products" className='navbar-item' >Todos los productos</Link>
            </div>
          </div>

    );
}

export default Dropdown;
