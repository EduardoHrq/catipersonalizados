
import { NavLink } from 'react-router-dom'
import logoCat from '../../../public/catiP.jpg'
import { ButtonPedido, HeaderContainer, LinksContainer } from './style'
import { ArrowRight } from 'phosphor-react'


export function Header() {
  return (
    <HeaderContainer>
      <div className='imageArea'>
        <img src={logoCat} alt="" />
      </div>

      <div className='secondAreaHeader'>

        <LinksContainer>
          <NavLink to="/">home</NavLink>
          <NavLink to="/topos">topos</NavLink>
          <NavLink to="/caixas">caixas</NavLink>
          <NavLink to={"/tags"}>tags</NavLink>
        </LinksContainer>

        <ButtonPedido>

          <NavLink to={"/pedido"}>
            faça o seu pedido!
            <ArrowRight weight='bold'/>
          </NavLink>

        </ButtonPedido>
      </div>
    </HeaderContainer>
  )
}