// import { FriendListItem } from "./FriendListItem"

import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
};
