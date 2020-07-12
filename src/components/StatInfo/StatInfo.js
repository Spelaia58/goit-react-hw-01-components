import React from "react";
import PropTypes from "prop-types";

const StatInfo = ({ label, percentage }) => {
  return (
    <>
      <span className="Label">{label}</span>
      <span className="Percentage">{percentage}%</span>
    </>
  );
};

StatInfo.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatInfo;
