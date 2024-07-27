import React from "react";
import "./dashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <div className="options">
          <div className="option">
            <img src="./chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="./image.png" alt="" />
            <span>Analyse Images</span>
          </div>
          <div className="option">
            <img src="./code.png" alt="" />
            <span>Solve this code errror</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Ask the cat anything?" />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
