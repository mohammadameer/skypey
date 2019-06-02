import React from 'react'
import _ from "lodash"
import Store from "../store"
import "./ChatWindow.css"

import Header from "./Header"
import Chats from "./Chats"
import MessageInput from "../containers/MessageInput"

export default function ChatWindows({activeUserId}) {

  const state = Store.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMsgs = state.messages[activeUserId]
  const { typing } = state

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  )
}
