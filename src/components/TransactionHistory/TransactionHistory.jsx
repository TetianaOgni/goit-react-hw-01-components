import { PropTypes } from 'prop-types';
import { Transaction } from 'components/TransactionHistory/Transaction/Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionSection}>
      <table className={css.transactionHistory}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
