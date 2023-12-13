import { InstagramLogo } from "phosphor-react";
import { RouletteContainer, SocialMedia } from "./style";

interface RouletteProps{
  rotate: string
}

export function Roulette({rotate}: RouletteProps) {

  return(
    <>
      <RouletteContainer rotate={rotate}>

        <div className="area1"></div>
        <div className="area2"></div>
        <div className="area3"></div>
        <div className="area4"></div>


      </RouletteContainer>
      <SocialMedia>
        <InstagramLogo size={40} weight="fill"/>
      </SocialMedia>
    </>
  )
}