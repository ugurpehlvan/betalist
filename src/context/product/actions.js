import { apiURL, axiosClient } from "service";
import {
  GET_PRODUCTS,
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
} from "context/product/keys";

export const getProducts = (dispatch) => async () => {
  try {
    Promise.all([
      axiosClient.get(apiURL.getProduct),
      axiosClient.get(apiURL.getCart),
    ]).then(([product, carts]) => {
      // get quatity of each product in cart and add to product
      const cartByProductId = new Map();
      const cartsData = Array.isArray(carts?.data) ? carts?.data : [];
      cartsData?.forEach((cart) => {
        cartByProductId.set(cart?.productId, cart);
      });
      const products = product.data.map((item) => {
        const cart = cartByProductId.get(item.id);
        return {
          ...item,
          quantity: cart ? cart.quantity : 0,
        };
      });

      dispatch({ type: GET_PRODUCTS, payload: products });
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (dispatch) => async (id) => {
  try {
    await axiosClient.get(`/add-to-cart?id=${id}`);
    dispatch({ type: ADD_TO_CART, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const subtractFromCart = (dispatch) => async (id) => {
  try {
    await axiosClient.get(`/subtract-from-cart?id=${id}`);
    dispatch({ type: SUBTRACT_FROM_CART, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const searchProducts = (dispatch) => async (name) => {
  try {
    Promise.all([
      axiosClient.get(apiURL.searchProduct(name)),
      axiosClient.get(apiURL.getCart),
    ]).then(([product, carts]) => {
      const cartByProductId = new Map();
      const cartsData = Array.isArray(carts?.data) ? carts?.data : [];
      cartsData?.forEach((cart) => {
        cartByProductId.set(cart.productId, cart);
      });

      const products = Array.isArray(product?.data)
        ? product?.data?.map((item) => {
            const cart = cartByProductId.get(item?.id);
            return {
              ...item,
              quantity: cart ? cart?.quantity : 0,
            };
          })
        : [];

      dispatch({ type: GET_PRODUCTS, payload: products });
    });
  } catch (error) {
    console.log(error);
  }
};
