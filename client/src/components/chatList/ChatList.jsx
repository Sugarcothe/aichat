import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chatList">
      <div className="title">DASHBOARD</div>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Be Curious</Link>
      <Link to="/">Contact</Link>
      <hr />
      <div className="title">YOUR RECENT CHATS</div>
      <div className="list">
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo" />
        <div className="text">
          <span>Upgrade to CuriousCat AI Pro</span>
          <span>Get Unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
