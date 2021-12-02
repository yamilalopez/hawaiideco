import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/logo.jpeg'

const NavBar = () => {
  return (
    <div>
      <div>
        <p class="cuotas">3 y 6 cuotas sin interés - Envíos a todo el país</p>
      </div>
    <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} className="imgNav"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item navText">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        
        <li class="nav-item dropdown navText">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Alfombras</a></li>
            <li><a class="dropdown-item" href="#">Espejos</a></li>
            <li><a class="dropdown-item" href="#">Velas aromáticas</a></li>
            <li><a class="dropdown-item" href="#">Jarrones/Floreros</a></li>
            <li><a class="dropdown-item" href="#">Almohadones</a></li>
          </ul>
        </li>
        <li class="nav-item navText">
          <a class="nav-link" href="#">Favoritos</a>
        </li>
        <li class="nav-item navText">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        
      </ul>
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="#"><CartWidget/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar