import React from "react";
import "./Main.css";

import ChatWindows from "./ChatWindow"
import Empty from "../components/Empty"

const Main = ({user, activeUserId}) => {

  const renderMainContent = () => {
    if(activeUserId){
      return <ChatWindows activeUserId={activeUserId} />
    } else {
      return <Empty user={user} activeUserId={activeUserId} />
    }
    
  }

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;