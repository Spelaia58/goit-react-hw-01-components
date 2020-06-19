import React from "react";
import PropTypes from "prop-types";
import StatInfo from "./StatInfo"

const Statistics = ({title, stats})=> (
 
  <section>
{title && <h2>{title}</h2>}
  <ul>
    {stats.map(({id, label, percentage}) =>(
      <li key={id}>
        <StatInfo
        label={label}
        percentage={percentage}
        />
         </li>
    ))}
  </ul>
  </section>
)


Statistics.defaultProps = {
  title:""
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
    })
  ).isRequired
};

 export default Statistics;