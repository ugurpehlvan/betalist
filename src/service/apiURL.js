const apiUrl = {
  getCart: "/view-cart",
  getProduct: "/products",
  searchProduct: (name) => `/search?name=${name}`,
};

export default apiUrl;
