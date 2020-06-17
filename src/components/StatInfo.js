import React from "react";
import PropTypes from "prop-types";

const StatInfo = ({label, persentage}) => {
    return(
        <section>
  <h2>Upload stats</h2>

  <ul>
    <li>
    <span>{label}</span>
    <span>{persentage}%</span>
    </li>
  
  </ul>
</section>
    )
}

StatInfo.propTypes = {
    label=PropTypes.string.isRequired,
    persentage=PropTypes.number.isRequired
}
export default StatInfo;