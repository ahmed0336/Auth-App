
import { ActionTypes } from "../constants/action-types";
const intialState = {

    formarray:[]
}




//switch case matching wo onclick use pata chalata hai ke konsa action perform krna hai yeh nichey hua hai


export const formreducerfunction = (state = intialState.formarray, { type, payload }) => {
    // console.log("value of payload",payload)
           
    switch (type) {
        case ActionTypes.FORMDATA: 
          // return  state + payload;
          return [...state , payload];
  
        default:
          return state;
      }
    

        
    
    
  };
