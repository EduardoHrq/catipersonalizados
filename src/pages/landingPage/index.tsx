import { useState } from "react";
import { Roulette } from "./components/roullete";
import { BackgroundSelected, ButtonsContainer, ButtonsExamples, HomeContainer } from "./styles";

export function Home() {

  const [rotation, setRotation] = useState(() => {
    if(document.documentElement.clientWidth < 768) {
      return "45deg"
    } else {
      return "0deg"
    }
  });

  const [ leftPosition, setLeftPosition ] = useState(() => {
    if(document.documentElement.clientWidth < 768) {
      return "14%"
    } else {
      return "15%"
    }
  });

  return (
    <HomeContainer>

      <h3>
        Olá, somos Cati Persinalizados e tornamos momentos importantes ainda mais especiais!
      </h3>  

      <ButtonsContainer>

        <input type="radio" name="roleta" id="topo" hidden defaultChecked onChange={(e) => {
          if(e.target.checked) {
            if(document.documentElement.clientWidth < 768) {
              setRotation( "45deg")
              setLeftPosition("14%")
            } else {
              setRotation( "0deg")
              setLeftPosition("15%")
            }
            
          }
        }} />
        <ButtonsExamples htmlFor="topo">topo</ButtonsExamples>

        <input type="radio" name="roleta" id="caixas" hidden onChange={(e) => {
          if(e.target.checked) {
            if(document.documentElement.clientWidth < 768) {
              setRotation( "135deg")
            } else {
              setRotation( "90deg")
            }
            setLeftPosition("50%")
          }
        }} />
        <ButtonsExamples htmlFor="caixas">caixas</ButtonsExamples>

        <input type="radio" name="roleta" id="tags" hidden onChange={(e) => {
          if(e.target.checked) {
            if(document.documentElement.clientWidth < 768) {
              setRotation( "225deg")
              setLeftPosition("86%")
            } else {
              setRotation( "180deg")
              setLeftPosition("85%")
            }
          }
        }} />
        <ButtonsExamples htmlFor="tags">tags</ButtonsExamples>
      
        <BackgroundSelected left={leftPosition}></BackgroundSelected>

      </ButtonsContainer>

      <Roulette rotate={rotation}/>
    </HomeContainer>
  )
}