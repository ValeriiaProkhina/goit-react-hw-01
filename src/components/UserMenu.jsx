import { GiBearFace } from "react-icons/gi";

export const UserMenu = ({ name }) => {
  return (
    <div>
      <p><GiBearFace color="red" size='24' /> {name}</p>
    </div>
  );
}