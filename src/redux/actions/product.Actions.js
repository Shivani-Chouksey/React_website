import * as actionType from "../constants/product.Constants";
// import axios from "axios";
import { toast } from "react-toastify";
import products from "../../database/products.json";

export const getProduct = () => (dispatch) => {
  try {
    const response = products;
    // console.log("action", products);
    dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_FAIL,
      payload: error.response.message,
    });
    toast.error(error.response.data.message, {
      position: "top-center",
    });
  }
};


