import React from 'react'
import "./Chats.css"

class Chats extends React.Component {
  constructor(props){
    super(props)

    this.chatsRef = React.createRef()
  }
  
  componentDidMount(){
    this.scrollToBottom()
  }

  componentDidUpdate(){
    this.scrollToBottom()
  }
  
  scrollToBottom() {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight
  }
  
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {
          this.props.messages.map(message => (
            <Chat message={message} key={message.number} />
          ))
        }
      </div>
    )
  }
}


function Chat({message}) {

  const {text, is_user_msg} = message
  
  return (
    <span className={`Chat ${is_user_msg ? "is-user-message" : ""}`} >{text}</span>
  )
}
          
export default Chats