import { combineReducers } from "redux";
// yeh import actioin se kre rhy hai action ka function yeh formfunction
// import { productsReducer, selectedProductsReducer  } from "./productsReducer";
// import { changenumber  } from "./productsReducer";
import { changenumber } from "./updownreducer";

import { formreducerfunction}  from "./FormReducer"
import {ProductReducer} from "./ProductReducer"


const reducers = combineReducers({
    changenumber,
    formreducerfunction,
    ProductReducer
    
});
export default reducers;
