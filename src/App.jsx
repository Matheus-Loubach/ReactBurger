import React from "react";
import { useState } from "react";
import Bebidas from "./Components/BebidasMenu";
import Carrinho from "./Components/Carrinho";
import Menu from "./Components/BurguerMenu";
import NavBar from "./Components/NavBar";
import SobremesaMenu from "./Components/SobremesaMenu";
import Footer from "./Components/Footer";


function App() {

  const estagios = [
    {id: 0, name: 'bebidas'},
    {id: 1, name: 'hambuguer'},
    {id: 2, name: 'carrinho'},
    {id: 3, name: 'sobremesas'},
  ];

  //trocar pag
  //const [show, setShow] = useState(true);
  const [estagio, setEstagio] = useState(estagios[1].name);

  //Dados para o carrinho
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart((cart => [...cart, item]));
  };

  const MenuHambu = () =>{
    setEstagio(estagios[1].name);
  }
  const CarrinhoCart = () =>{
    setEstagio(estagios[2].name);
  }
  const AcomSobremesa = () =>{
    setEstagio(estagios[3].name);
  }
  const AcomBebida = () =>{
    setEstagio(estagios[0].name);
  }


  return (
    <div>
     {/*nav menu*/}
     <NavBar qtdProdutos={cart.length} AcomBebida={AcomBebida} CarrinhoCart={CarrinhoCart} MenuHambu={MenuHambu} AcomSobremesa={AcomSobremesa}/>

     {/*Cardapio hamburguer e carrinho*/}
     {estagio === 'hambuguer' && <Menu handleClick={handleClick}/>}
     {estagio === 'carrinho' && <Carrinho cart={cart} setCart={setCart}/>}

     {/*Acompanhamentos*/}
     {estagio === 'bebidas' && <Bebidas  handleClick={handleClick}/>}
     {estagio === 'sobremesas' && <SobremesaMenu handleClick={handleClick}/>}

     {/*Rodapé*/}
     <Footer/>
     
    </div>
  );
}

export default App;
