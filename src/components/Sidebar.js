import React from 'react'
import User from "../containers/User"
import "./Sidebar.css"

export default function Sidebar(props) {
  
  return (
    <aside className="Sidebar">
      {props.contacts.map((contact) => <User user={contact} key={contact.user_id} />)}
    </aside>
  )
}
