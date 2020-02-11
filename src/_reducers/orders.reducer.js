import { ordersConstants } from "../_constants";

const initialState = {
  orders: [],
  pending: false,
  errorMsg: ""
};

export const orders = (state = initialState, action) => {
  switch (action.type) {
    case ordersConstants.GET_ORDERS_REQUEST:
      return {
        ...state,
        pending: true,
        errorMsg: ""
      };
    case ordersConstants.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        pending: false,
        errorMsg: ""
      };
    case ordersConstants.GET_ORDERS_ERROR:
      return {
        ...state,
        pending: false,
        errorMsg: action.payload
      };

    case ordersConstants.UPLOAD_ORDERS_REQUEST:
      return {
        ...state,
        pending: true,
        errorMsg: ""
      };
    case ordersConstants.UPLOAD_ORDERS_SUCCESS:
      return {
        ...state,
        pending: false,
        errorMsg: ""
      };
    case ordersConstants.UPLOAD_ORDERS_ERROR:
      return {
        ...state,
        pending: false,
        errorMsg: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
