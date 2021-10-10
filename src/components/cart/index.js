import { useSelector } from "react-redux";
import Product from "../product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      {/* <StyledTitle>Meu carrinho de compras</StyledTitle> */}
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
    </>
  );
};

export default Cart;
