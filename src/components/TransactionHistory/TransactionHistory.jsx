import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(css.container)}>
      <thead className={clsx(css.head)}>
        <tr>
          <th className={clsx(css.text, css.bold)}>Type</th>
          <th className={clsx(css.text, css.bold)}>Amount</th>
          <th className={clsx(css.text, css.bold)}>Currency</th>
        </tr>
      </thead>
      <tbody className={clsx(css.item)}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={clsx(css.text)}>{type}</td>
              <td className={clsx(css.text)}>{amount}</td>
              <td className={clsx(css.text)}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
