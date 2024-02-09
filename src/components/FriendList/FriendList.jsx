// import { FriendListItem } from "./FriendListItem"
import clsx from "clsx";
import css from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.list)}>
      {friends.map((friend) => {
        return (
          <li className={clsx(css.item)} key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
};
