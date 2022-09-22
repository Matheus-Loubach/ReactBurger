import React from 'react'
import list from '../Data'
import Products from './Products'


const Menu = ({ handleClick }) => {
  return (
    <div>
      <section className='sub_titulo'>
         <h2>Hambúrgueres</h2>
      </section> 
      <section>
        
      {list.map((produtos) => <Products key={produtos.id} item={produtos} handleClick={handleClick}/>)}
      </section>
    </div>
  )
}

export default Menu