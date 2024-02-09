import clsx from "clsx";
import css from "./Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.userContainer)}>
        <img
          className={clsx(css.img)}
          src={image}
          alt="User avatar"
          width="160"
        />
        <p className={clsx(css.userName)}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={clsx(css.list)}>
        <li className={clsx(css.listItem)}>
          <span>Followers</span>
          <span className={clsx(css.bold)}>{followers}</span>
        </li>
        <li className={clsx(css.listItem)}>
          <span>Views</span>
          <span className={clsx(css.bold)}>{views}</span>
        </li>
        <li className={clsx(css.listItem)}>
          <span>Likes</span>
          <span className={clsx(css.bold)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
