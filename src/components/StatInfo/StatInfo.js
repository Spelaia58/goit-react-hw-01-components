import React from "react";
import PropTypes from "prop-types";
import styles from "./StatInfo.module.css";

const StatInfo = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.Label}>{label}</span>
      <span className={styles.Percentage}>{percentage}%</span>
    </>
  );
};

StatInfo.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatInfo;
