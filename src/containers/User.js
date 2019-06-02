import React from 'react'
import "./User.css"

import Store from "../store"
import { setActiveUserId } from "../actions"


export default function User({user}) {

  const {name, profile_pic, status} = user

  return (
    <div className="contact" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="contact_pic" />
      <div className="contact_detail">
        <p className="contact_name"> {name} </p>
        <p className="contact_status"> {status} </p>
      </div>
    </div>
  )
}

function handleUserClick({user_id}) {
  Store.dispatch(setActiveUserId(user_id))
}