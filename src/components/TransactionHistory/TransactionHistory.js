import React from "react";
import PropTypes from "prop-types";
import History from "./History";
import styles from "./TransactionHistory.module.css";

const TransactionHistiry = ({ items }) => {
  return (
    <table className={styles.TransactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <History type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistiry.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistiry;
