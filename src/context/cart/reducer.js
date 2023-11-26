import {
  GET_CARTS,
} from 'context/cart/keys';

export const initialState = {
  carts: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CARTS:
      return {
        ...state,
        carts: payload,
      };
    default:
      return state;
  }
};

export default reducer;
