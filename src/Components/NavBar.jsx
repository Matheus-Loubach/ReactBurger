import React from 'react'
import '../CSS/NavBar.css'
import menuBarra from '../Icons/botao-de-menu-de-tres-linhas-horizontais.png';


const NavBar = ({qtdProdutos, AcomBebida, CarrinhoCart, MenuHambu,AcomSobremesa,setMenuOn}) => {
  return (
    <div>
      <header>
         <nav>
          <div className='container_nav'>
           <h1 onClick={MenuHambu} >ReactBurguer</h1>
           <ul>
           <li onClick={MenuHambu}>Hambúrgueres</li>
           <li>Acompanhamentos -
            <ul>
              <li onClick={AcomBebida}>Bebidas</li>
              <li onClick={AcomSobremesa}>Sobremesas</li>
            </ul>
            </li>
           </ul>

           <div className="cart" onClick={CarrinhoCart}>
            <span>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </span>
            <span>
              {qtdProdutos}
            </span>
            </div>
           </div>     
        </nav>
         </header>     
         <p onClick={() => setMenuOn(true)} className='MenuMobile'> <img src={menuBarra}/> </p>
    </div>
  )
}

export default NavBar