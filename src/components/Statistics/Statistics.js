import React from "react";
import PropTypes from "prop-types";
import StatInfo from "./StatInfo";

const Statistics = ({ title, stats }) => {
  return (
    <section className="Statistics">
      {title && <h2 className="Title">{title}</h2>}
      <ul className="StatList">
        {stats.map(({ id, label, percentage }) => (
          <li className="Item" key={id}>
            <StatInfo label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
