import React from 'react'
import Store from "../store"
import { setTypingValue, setMessage } from "../actions"
import "./MessageInput.css"

export default function MessageInput({value}) {
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input 
        className="Message_input"
        onChange={handleChange}
        value={value}
        placeholder="send a message..."
      />
    </form>
  )
}



const handleChange = e => {
  Store.dispatch(setTypingValue(e.target.value))
}

const handleSubmit = e => {
  
  const state = Store.getState();
  e.preventDefault()
  
  const { typing, activeUserId } = state
  console.log(state)
  Store.dispatch(setMessage(typing, activeUserId))
}
