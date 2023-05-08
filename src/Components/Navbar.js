import React from 'react'
import { Link } from 'react-router-dom'

// import {logo} from './Images/'

export const Navbar = () => {
  return (
    <div className='rounded-pill navani ' style={{position:'absolute', zIndex:'99' , backgroundColor:'white', margin:"6% 1% 1% 14%"}}>
        <nav class="navbar navbar-expand-lg bg-body-black m-0 me-6 "  >
  <div class="container-fluid" style={{marginRight:"13px"}}>
    <Link class="navbar-brand" to="/">
        <img src='https://codexpeed.com/fundbux-wp/wp-content/uploads/2021/11/logomain.png'></img>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bg-body "  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link "  to="/"><h5>Home</h5></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/About"><h5>About</h5></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/Causes"><h5>Causes</h5></Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link " to="/Shop"><h5>Shop</h5></Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link " to="/News"><h5>News</h5></Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link " to="/Contact"><h5>Contact</h5></Link>
        </li>  
      </ul>
      <button type="button" class="btn btn-warning hover rounded-pill" ><h5>Donate Now</h5></button>
    </div>
  </div>
</nav>
    </div>
  )
}
