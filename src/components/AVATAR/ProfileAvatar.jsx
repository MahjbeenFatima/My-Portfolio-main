import React from "react";
import "./ProfileAvatar.css";
import profileImage from "/src/assets/images/avatar-female.png";

const ProfileAvatar = () => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar-glow"></div>
      <div className="avatar-container">
        <img src={profileImage} alt="Mahjbeen Fatima" className="avatar-image" />
      </div>
      <div className="avatar-status-pill">
        <span className="status-dot"></span>
        <span className="status-text">Available for Work</span>
      </div>
    </div>
  );
};

export default ProfileAvatar;
