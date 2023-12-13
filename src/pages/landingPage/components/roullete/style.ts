import styled from "styled-components";

interface RouletteContainerProps {
  rotate: string
}

export const RouletteContainer = styled.div<RouletteContainerProps>`

  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%) rotate(${p => p.rotate});
  transition: all .3s;

  width: 50rem;
  height: 50rem;
  border-radius: 100%;

  background-color: #fb7185;

  .area1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 25rem;
    height: 25rem;
    background-image: url("/topo.svg");
    background-size:75%;
    background-repeat: no-repeat;
    background-position: top;
    transform: rotate(-45deg);
  }

  .area2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 15rem;
    height: 15rem;

  }

  .area3 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25rem;
    height: 25rem;
    background-image: url("/caixas.svg");
    background-size:75%;
    background-repeat: no-repeat;
    background-position: top;
    transform: rotate(-135deg);
  }

  .area4 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25rem;
    height: 25rem;
    background-image: url("/tags.svg");
    background-size:75%;
    background-repeat: no-repeat;
    background-position: top;
    transform: rotate(135deg);
  }

  @media screen and (max-width: 768px) {
    & {
      right: 50%;
      width: 35rem;
      height: 35rem;
    }

    & .area1, .area2, .area3, .area4 {
      width: 18rem;
      height: 18rem;
    }
  }

`

export const SocialMedia = styled.a`

  position: fixed;
  bottom: 1rem;
  right: 1rem;

`