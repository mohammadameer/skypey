import { 
  SET_TYPING_VALUE,
  SET_MESSAGE
 } from "../constants/action-types"


export default (state = "", action) => {
  switch(action.type){
    case SET_TYPING_VALUE:
      return action.payload

    case SET_MESSAGE:
      return ""

    default:
      return state
  }
}