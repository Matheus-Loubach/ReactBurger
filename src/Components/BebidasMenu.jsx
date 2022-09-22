import React from 'react'
import drink from '../DataDrinks'
import Products from './Products'


const Menu = ({ handleClick }) => {
  return (
    <div>
      <section className='sub_titulo'>
         <h2>Drinks</h2>
      </section> 
      <section>
        {drink.map((bebidas) => <Products key={bebidas.id} item={bebidas} handleClick={handleClick}/>)}      
      </section>
    </div>
  )
}

export default Menu