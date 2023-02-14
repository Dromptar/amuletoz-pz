import './navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown/Dropdown';
import Title from '../Navbar/Sections/Title';



const Navbar = React.memo(() => {
    return (

      <nav className="navbar is-white is-transparent has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <Link className='nav-link' to="/">
        <img src="../img/logo.jpg" id="logo" alt="logo" width={80}/>
      </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item is-size-4" to='/'>
            Inicio
          </Link>
          <a href='#about'className="navbar-item is-size-4">
            Quienes somos
          </a>
          <Dropdown dropdown={"Nuestros Productos"}/>
        </div>
        <div className="navbar-end">
              <a href="#" className="navbar-item"><i className="fa fa-search" /></a>
              <a href="#" className="navbar-item"><i className="fa fa-shopping-bag" /></a>
            </div>
      </div>
    </nav>
    )
  })

  export default Navbar

