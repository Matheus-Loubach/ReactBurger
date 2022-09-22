import React from 'react'
import git from '../Icons/icons8-github-100.png'
import link from '../Icons/icons8-linkedin-100.png'
import bk from '../Icons/icons8-burger-king-new-logo-96.png'

import '../CSS/Footer.css'

const Footer = () => {
  return (
    <div>

      <footer className='container_footer'>
            <ul>
              <li><img src={bk} alt="Logotipo bk" srcset="" /></li>
              <li>Mais informações</li>
              <ul>
              <li><a href="https://www.linkedin.com/in/matheus-loubach/"><img src={link} alt="GitHub"/></a></li>
              <li><a href="https://github.com/Matheus-Loubach"><img src={git} alt="linkedin"/></a></li>
              </ul>
            </ul>
            <p>Imagens meramente ilustrativas. Consulte os restaurantes participantes. TM & © 2021 Burger King Corporation. Todos os direitos reservados.</p>
            <span>Developer: <a href="https://www.linkedin.com/in/matheus-loubach/">Matheus Loubach</a></span>
      </footer>

    </div>
  )
}

export default Footer