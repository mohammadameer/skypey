import React from 'react'
import "./Empty.css"

export default function Empty({user, activeUserId}) {

  const {name, profile_pic, status} = user
  const first_name = name.split(" ")[0]

  return (
    <div className="Empty">
      <h1 className="Empty_name">Welcome {first_name}</h1>
      <img src={profile_pic} alt={name} className="Empty_img" />
      <p className="Empty_status">
        <b>status: </b> {status}
      </p>
      <button className="Empty_button">
        start a conversation
      </button>
      <p className="Empty_info">
        Search for someone to start chatting with or go to Contacts to see who is available
      </p>
    </div>
  )
}
