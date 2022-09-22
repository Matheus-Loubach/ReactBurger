import React from 'react'
import Products from './Products'
import DataSobremesa from '../DataSobremesa'

const SobremesaMenu = ({handleClick}) => {
  return (
    <div>
   
   <section className='sub_titulo'>
         <h2>Sobremesas</h2>
      </section> 
      <section>

        {DataSobremesa.map((sobremesa) => <Products key={sobremesa.id} item={sobremesa} handleClick={handleClick}/>)}
      
      </section>
  
    </div>
)
}

export default SobremesaMenu