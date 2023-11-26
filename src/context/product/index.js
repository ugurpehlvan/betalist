import createDataContext from "context/createDataContext";
import reducer, { initialState } from "context/product/reducer";
import * as actions from "context/product/actions";

export const { Context: ProductContext, Provider: ProductProvider } =
  createDataContext(reducer, { ...actions }, initialState);
