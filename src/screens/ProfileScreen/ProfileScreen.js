import React from "react";
import "./ProfileScreen.css";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { signOut } from "@firebase/auth";
import { auth } from "../../utils/firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix profile avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <button
              onClick={() => signOut(auth)}
              className="profileScreen__signOut"
            >
              Sign Out
            </button>
            {/* <div className="profileScreen__plans"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
