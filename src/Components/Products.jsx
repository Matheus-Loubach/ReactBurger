import React from 'react'
import '../CSS/Products.css'
import '../CSS/responsive.css'
 
 const Products = ({item, handleClick}) => {

  const {title, img, price} = item;
   return (
     <div>
       <div className="cards">
        
        <div className="imagem_box">
           <img src={img} alt="hambuguers" />
        </div>
        
        <div className='container_details'>

        <div className="details">
          <p>{title}</p>
          <p>R${price}</p>
        </div>
        <div>

        <button onClick={()=> handleClick(item)}>Adicionar ao carrinho</button>
        </div>
        
        </div>
      </div>
     </div>
   )
 }
 
 export default Products