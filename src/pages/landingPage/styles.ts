import styled from "styled-components";

export const HomeContainer = styled.div`

  margin: 5rem 0;
  padding: 0 2rem;
  
`

export const ButtonsContainer = styled.div`

  width: 27rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  
  input[type="radio"]:checked + label {
    color: #FFF;
    text-transform: uppercase;
    font-size: 1.1rem;

    box-shadow: none;

  }

  @media screen and (max-width: 768px) {
    & {
      width: 22rem;
    }
  }

`

export const ButtonsExamples = styled.label`

  width: 8rem;
  height: 8rem;
  border-radius: 8px;
  line-height: 0;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbcfe875;
  box-shadow: 0 0 0 4px #fbcfe8;

  transition: all .3s;

  @media screen and (max-width: 768px) {
    & {
      width: 6rem;
      height: 6rem;
    }
  }
`

interface position {
  left: string
}

export const BackgroundSelected = styled.div<position>`

  width: 8rem;
  height: 8rem;
  background-color: red;
  border-radius: 8px;

  transition: all .3s;

  position: absolute;
  transform: translate(-50%);
  left: ${p => p.left};
  z-index: -10;

  @media screen and (max-width: 768px) {
    & {
      width: 6rem;
      height: 6rem;
    }
  }

`