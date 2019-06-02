import { 
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SET_MESSAGE
} from "../constants/action-types"

export const setActiveUserId = id => {
  return {
    type: SET_ACTIVE_USER_ID,
    payload: id
  }
}

export const setTypingValue = value => {
  return {
    type: SET_TYPING_VALUE,
    payload: value
  }
}

export const setMessage = (message, userId) => {
  
  return {
    type: SET_MESSAGE,
    payload: {
      message,
      userId
    }
  }
}