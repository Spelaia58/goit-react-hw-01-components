import React from "react";
import PropTypes from "prop-types";

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div className="Profile">
      <div className="Description">
        <img className="Avatar" src={avatar} alt="user avatar" />
        <p className="Name">{name}</p>
        <p className="Tag">@{tag}</p>
        <p className="Location">{location}</p>
      </div>

      <ul className="Stats">
        <li>
          <span className="Label">Followers</span>
          <span className="Quantity">{followers}</span>
        </li>
        <li>
          <span className="Label">Views</span>
          <span className="Quantity">{views}</span>
        </li>
        <li>
          <span className="Label">Likes</span>
          <span className="Quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
export default Profile;
