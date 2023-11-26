import {
  GET_PRODUCTS,
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
} from "context/product/keys";

export const initialState = {
  products: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map((product) => {
          if (Number(product.id) === Number(payload)) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };
    case SUBTRACT_FROM_CART:
      return {
        ...state,
        products: state.products.map((product) => {
          if (Number(product.id) === Number(payload)) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
