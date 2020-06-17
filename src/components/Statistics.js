import React from "react";
import PropTypes from "prop-types";
import StatInfo from "./StatInfo"

const Statistics = ({title, stats})=> (
  <section>
  <h2>Upload stats</h2>

  <ul>
    {stats.map(({id, label, persentage}) =>(
      <li key={id}>
        <StatInfo
        label={label}
        persentage={persentage}
        />

      </li>
    ))}
  </ul>
  </section>
)
Statistics.propTypes = {
  stats:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
    })
  ).isRequired
};

 export default Statistics;