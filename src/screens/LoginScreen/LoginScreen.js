import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "../SignUpScreen/SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__header">
        <img
          className="loginScreen__logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt="netflix_logo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
      </div>
      <div className="loginScreen__gradient" />
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films,TV shows and more.</h1>
            <h2>Watch anywhere. Cancel any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
