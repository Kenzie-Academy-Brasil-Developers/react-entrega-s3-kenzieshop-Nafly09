import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import { Card } from "./styles";
import { Button } from "@material-ui/core";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  return (
    <Card>
      <p>{name}</p>
      <img src={img} alt={`${name}`} />
      <p>R${price}</p>
      {isRemovable ? (
        <Button
          variant="contained"
          onClick={() => dispatch(removeFromCartThunk(id))}
        >
          Remover item do carrinho
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => dispatch(addToCartThunk(product))}
        >
          Adicionar item no carrinho
        </Button>
      )}
    </Card>
  );
};

export default Product;
