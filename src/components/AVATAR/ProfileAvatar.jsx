import React from "react";
import "./ProfileAvatar.css";
import profileImage from "/src/assets/images/avatar-female.png";

const ProfileAvatar = () => {
  return (
    <div className="avatar-container">
      <img src={profileImage} alt="Profile" className="avatar-image" />
    </div>
  );
};

export default ProfileAvatar;
