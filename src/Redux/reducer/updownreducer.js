
import { ActionTypes } from "../constants/action-types";
const intialState = 0;




//switch case matching wo onclick use pata chalata hai ke konsa action perform krna hai yeh nichey hua hai


export const changenumber = (state = intialState, { type, payload }) => {
    // console.log("value of payload",payload)
   
    

        switch (type) {
          case ActionTypes.INCREMENT:
            return ++ payload

         
    
            case ActionTypes.DECREMENT:
                if (payload <= 0){

                    return payload
    
                }
    
                else{
    
                    return   --payload;
                }
               
    
                    
                
          default:
            return state;
        }
    
    
  };
