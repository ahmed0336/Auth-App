import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const ProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
       
    //   case ActionTypes.FETCH_PRODUCTS:
    //     return { ...state, products: payload };

    default:
      return state;
  }
};


