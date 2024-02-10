import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.container}>
      <thead className={css.head}>
        <tr>
          <th className={clsx(css.text, css.bold)}>Type</th>
          <th className={clsx(css.text, css.bold)}>Amount</th>
          <th className={clsx(css.text, css.bold)}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.item}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.text}>{type}</td>
              <td className={css.text}>{amount}</td>
              <td className={css.text}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
