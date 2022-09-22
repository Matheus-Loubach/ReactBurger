import React, { useEffect } from 'react'
import { useState } from 'react'
import '../CSS/Carrinho.css'

const Carrinho = ({cart, setCart}) => {
   
  const [preco, setPreco] = useState(0);

  //calculo total
  const handlePrice = () =>{
    let valor = 0;
    cart.map((itens) => (valor += itens.amount * itens.price));
    setPreco(valor);
  }

  //add produto
  const AddProdutos = (dados, p) =>{
    const ind = cart.indexOf(dados);
      const arr = cart;
      arr[ind].amount += p;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
  }

  //Remover Produto
  const RemoverProdutos = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };


  useEffect(() => {
    handlePrice();
  });

  return (    
    <div>
      <article>
        {(cart == (0)) ? <p style={{fontSize: '40px' ,textAlign: 'center', fontWeight: 'bold'}}>Carrinho Vazio</p> : <span></span> }
        {cart.map((dados) => (
          
          <div key={dados.id}>
            
          <div className='img_carri'>
          
          <img src={dados.img} alt="produtos"/>
          <p>Pedido: {dados.title}</p>
          
          <div className='add_pro'>
            <button onClick={() => AddProdutos(dados, 1)}>+</button>
            <button>{dados.amount}</button>
            <button onClick={() => AddProdutos(dados, -1)}>-  </button>
          </div>
           
           <div className='remover'>
           <button onClick={()=> RemoverProdutos(dados.id)}>X</button>
           </div>

          </div>

        <div className='container_price_re'>
        <span>Preço: R${dados.price}</span>
        </div>

        </div>
        ))}
        <div className="total">
        <span>Preço Total:</span>
        <span>R${preco}</span>
        </div>
        
       {/* <div className="pedido">
       <button>Enviar Pedido</button>
      </div>  */}
      </article>
    </div>
  )
  
}

export default Carrinho