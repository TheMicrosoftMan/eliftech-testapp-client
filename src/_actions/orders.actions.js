import { ordersConstants } from "../_constants";
import { getOrdersAPI, uploadOrdersFileAPI } from "../_api/orders";

export const getOrders = page => dispatch => {
  dispatch({ type: ordersConstants.GET_ORDERS_REQUEST });
  getOrdersAPI(page)
    .then(data => {
      dispatch({
        type: ordersConstants.GET_ORDERS_SUCCESS,
        payload: data.data
      });
    })
    .catch(err => {
      dispatch({
        type: ordersConstants.GET_ORDERS_ERROR,
        payload: err
      });
    });
};

export const uploadOrdersFile = file => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({ type: ordersConstants.UPLOAD_ORDERS_REQUEST });
    uploadOrdersFileAPI(file)
      .then(() => {
        getOrders();

        dispatch({
          type: ordersConstants.UPLOAD_ORDERS_SUCCESS
        });

        resolve();
      })
      .catch(err => {
        dispatch({
          type: ordersConstants.UPLOAD_ORDERS_ERROR,
          payload: err.response.data.message
        });

        reject(err.response.data.message);
      });
  });
};
