import axios from "axios";
import { ActionTypes } from "../constants/action-types";

import baseurlapi from "../../api/BaseUrl"



//function returning another function
export const fetchProducts =  ()   => async (dispatch) => {
  const response = await baseurlapi.get("/products");

  dispatch({
    type:ActionTypes.FETCH_PRODUCTS, 
    payload:response.data
  })
  console.log("data fetchproduct of api is ===>",response)  
};

export const incNumber = (data) => {
    console.log("value of data",data)
    return {
      type: ActionTypes.INCREMENT,
      payload:data
    };
  };
  
  export const decNumber = (decdata) => {
    console.log("decreament no value is ===>",decdata)
    return {
      type: ActionTypes.DECREMENT,
      payload:decdata

    };
  };

  export const formdatafunction = (objdata) => {
    console.log("decreament no value is ===>",objdata)
    return {
      type: ActionTypes.FORMDATA,
      payload:objdata

    };
  };