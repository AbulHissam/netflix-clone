import React from "react";
import "./LoginScreen.css";
function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__header">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="loginScreen__button">Sign In</button>
      </div>
      <div className="loginScreen__gradient" />
      <div className="loginScreen__body">
        <>
          <h1>Unlimited films,TV programes and more.</h1>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
