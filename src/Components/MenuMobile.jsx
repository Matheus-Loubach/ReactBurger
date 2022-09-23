import {Container} from './MobileMenuStyles';
import Fechar from '../Icons/icons8-xbox-x-50.png'


const MenuMobile = ({menuOn, setMenuOn, AcomBebida,CarrinhoCart,MenuHambu,AcomSobremesa, qtdProdutos}) => {
  return (

    <Container IsVisible={menuOn}>
     <img src={Fechar} onClick={() => setMenuOn(false)}/>
     <div onClick={CarrinhoCart} className='carrinho'>
     <i className="fa fa-cart-plus" aria-hidden="true"></i>
     <span >{qtdProdutos}</span> 
     </div>
      <nav>
          <ul>
          <li>Cardápio</li>
          <li onClick={MenuHambu}>Hambúgueres</li>            
          <li onClick={AcomBebida}>Bebidas</li>            
          <li onClick={AcomSobremesa}>Sobremesas</li>
                     
          </ul>          
        </nav>    
    </Container>
    
  )
}

export default MenuMobile