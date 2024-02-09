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
      {items.map((item) => {
        return (
          <tbody className={clsx(css.item)} key={item.id}>
            <tr>
              <td className={clsx(css.text)}>{item.type}</td>
              <td className={clsx(css.text)}>{item.amount}</td>
              <td className={clsx(css.text)}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
