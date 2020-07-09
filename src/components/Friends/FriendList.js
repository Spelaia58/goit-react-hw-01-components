import React from "react";
import PropTypes from "prop-types";
import Friend from "./Friend";
import styles from "./Friends.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={styles.Item} key={id}>
          <Friend isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;
