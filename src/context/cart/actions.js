import { apiURL, axiosClient } from 'service';
import {
  GET_CARTS,
} from 'context/cart/keys';

export const getCarts = (dispatch) => async () => {
  try {
    const response = (await axiosClient.get(apiURL.getCart)).data;
    const carts = Array.isArray(response) ? response : [];
    dispatch({ type: GET_CARTS, payload: carts });
  } catch (error) {
    console.log(error);
  }
};