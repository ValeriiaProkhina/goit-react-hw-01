import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineClass = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <li className={css.item}>
      <div className={css.container}>
        <img className={css.img} src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={isOnlineClass}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </li>
  );
};
