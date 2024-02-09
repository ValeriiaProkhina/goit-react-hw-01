import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineClass = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <div className={clsx(css.container)}>
      <img className={clsx(css.img)} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnlineClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
