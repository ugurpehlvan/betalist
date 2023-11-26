import createDataContext from "context/createDataContext";
import reducer, { initialState } from "context/cart/reducer";
import * as actions from "context/cart/actions";

export const { Context: CartContext, Provider: CartProvider } =
  createDataContext(reducer, { ...actions }, initialState);
