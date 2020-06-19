import React from "react";
import PropTypes from "prop-types";

const StatInfo = ({label, percentage}) => {
    return(
    <>
    <span>{label}</span>
    <span>{percentage}%</span>
    </>

    )
}

StatInfo.propTypes = {
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
}
export default StatInfo;