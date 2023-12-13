import styled from "styled-components";

export const HeaderContainer = styled.header`

  width: 100vw;
  background-color: #fbcfe8;
  display: flex ;
  align-items: center;
  padding: 1rem 1rem;

  .imageArea {
    width: 8rem;
  }

  img {
    position: absolute;
    width: 8rem;
    border-radius: 100%;
    top: .5rem;
    left: .5rem;
  }

  .secondAreaHeader{

    width: 100%;
    margin-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

    @media screen and (max-width: 768px) {
    & .secondAreaHeader {
      justify-content: end;
    }
  }

`

export const LinksContainer = styled.div`

  display: flex;
  gap: 1rem;

  a {
    padding: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 8px;
    color: #9d174d;
  }

  a.active {

    background-color: #fb7185;
    color: #FFF;
    
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }

`

export const ButtonPedido = styled.div`

  a {
    color: #000;
    font-weight: bold;
    background-color: #fb7185;
    padding: 1rem;
    border-radius: 8px;
    text-transform: uppercase;
    line-height: 0;
    text-align: center;
    display: flex;
    align-items: center;
    transition: all .3s;
  }

  svg {
    width: 0;
    font-size: 1.2rem;

    transition: all .3s;
  }

  a:hover {
    gap: .5rem;

    & svg {
      width: 1rem;
      font-size: 1.2rem;
    }
  }

`