import React from "react";
import PropTypes from "prop-types";

const StatInfo = ({label, percentage}) => {
    return(
 

  <ul>
    <li>
    <span>{label}</span>
    <span>{percentage}%</span>
    </li>
  
  </ul>

    )
}

StatInfo.propTypes = {
    label:PropTypes.string.isRequired,
    persentage:PropTypes.number.isRequired
}
export default StatInfo;