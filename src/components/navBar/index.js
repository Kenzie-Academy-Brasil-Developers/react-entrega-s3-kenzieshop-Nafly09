import {
  Container,
  AnimationContainer,
  StyledAppBar,
  StyledButton,
} from "./styles";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart);

  const getTotalValue = () => {
    const value = cart
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);
    return Math.round(value * 100) / 100;
  };
  const [showProduct, setShowProducts] = useState(false);
  return (
    <>
      <Container>
        <StyledAppBar>
          <IconButton
            aria-label="cart"
            style={{ width: "50px" }}
            onClick={() =>
              showProduct === true
                ? setShowProducts(false)
                : setShowProducts(true)
            }
          >
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </StyledAppBar>
      </Container>
      {showProduct === true && (
        <AnimationContainer>
          <div>
            <h3>Resumo do pedido</h3>
            <div>
              <p>{cart.length} produtos</p>
              <p>
                <span>R${getTotalValue()}</span>
              </p>
            </div>
            <StyledButton variant="contained">Finalizar Compra</StyledButton>
          </div>
        </AnimationContainer>
      )}
    </>
  );
};

export default NavBar;
