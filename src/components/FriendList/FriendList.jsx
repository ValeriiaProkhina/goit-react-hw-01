import css from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};
