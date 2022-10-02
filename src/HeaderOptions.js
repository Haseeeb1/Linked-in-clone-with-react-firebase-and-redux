import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "./features/userSlice";
import "./HeaderOptions.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

function HeaderOptions({ avatar, Icon, title }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
