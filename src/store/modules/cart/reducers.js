import { addToCart, removeFromCart } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case addToCart:
      const { product } = action;

      return [...state, product];

    case removeFromCart:
      const { list } = action;

      return list;

    default:
      return state;
  }
};

export default cartReducer;
