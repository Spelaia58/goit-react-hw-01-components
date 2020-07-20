import React from "react";
import PropTypes from "prop-types";
import StatInfo from "../StatInfo/StatInfo";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      {title && <h2 className={styles.Title}>{title}</h2>}
      <ul className={styles.StatList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.Item} key={id}>
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
