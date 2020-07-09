import React from "react";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";

const Friend = ({ avatar, name, isOnline }) => {
  const statusOnline = [styles.Status];
  if (isOnline) {
    statusOnline.push(styles.StatusOnline);
  }

  return (
    <>
      <span className={statusOnline.join(styles.StatusOnline)}></span>
      <img className={styles.Avatar} src={avatar} alt={name} width="48" />
      <p className={styles.Name}>{name}</p>
    </>
  );
};
Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default Friend;
