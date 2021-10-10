import styled from "styled-components";
import { keyframes } from "styled-components";
import { AppBar, Button } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const customAppearence = keyframes`
from {
    opacity: 0;
    transform: translateX(99vw)
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
  position: absolute;
  left: 70vw;
  display: flex;
  flex-wrap: wrap;
  max-width: 29rem;
  min-width: 26rem;
  min-height: 16rem;
  animation: ${customAppearence} 1s;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 5;
  > div {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > h3 {
      font-size: 20px;
      color: #000;
    }
    > div {
      display: flex;
      justify-content: space-around;
      > p {
        color: #000;
        margin: 0;
      }
    }
  }

  @media (max-width: 715px) {
    left: 33vw;
    top: 44vh;
  }
`;

export const StyledButton = styled(Button)`
  && {
    max-width: 12rem;
    margin: 0 auto;
  }
`;

export const StyledAppBar = styled(AppBar)`
  && {
    margin-bottom: 5rem;
    display: flex;
  }
`;
