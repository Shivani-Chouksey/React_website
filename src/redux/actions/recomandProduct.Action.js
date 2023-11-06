import * as actionType from "../constants/recommandProduct.Constants";
// import axios from "axios";
import { toast } from "react-toastify";
import products from "../../database/recommandedProducts.json";

export const getRecommondedProduct = () => (dispatch) => {
  try {
    const response = products;
    console.log("action", response);
    dispatch({ type: actionType.GET_RECOM_PRODUCT_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: actionType.GET_RECOM_PRODUCT_FAIL,
      payload: error.response.message,
    });
    toast.error(error.response.data.message, {
      position: "top-center",
    });
  }
};


