

import React from "react";
import style from "./user.module.css";

const User = (props) => {
  const handleRemoveUser = (props) => {
    props.onRemoveUsers(id);
  };

  const { id, name, username, email, phone } = props.user;

  return (
    <article className={style.user}>
      <div>
        <h4>{name}</h4>
        <h5>UserName: {username} </h5>
        <h5>Email: {email}</h5>
        <h5>Phone: {phone}</h5>

        <button
          className={style.btn}
          onClick={() => {
            handleRemoveUser(id);
          }}
        >
          {" "}
          Remove{" "}
        </button>
      </div>
    </article>
  );
};

export default User;
