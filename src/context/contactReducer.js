
import { GET_CONTACTS } from './Types';
const contactReducer=(state,action)=>{
switch (action.type) {
    case GET_CONTACTS:
     return ({...state,contacts:action.payload})

    default:
       return state;
}
}
export default contactReducer