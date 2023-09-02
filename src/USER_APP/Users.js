import React from "react";
import User from "./User";
import style from "./users.module.css";
import { v4 as uuidv4 } from "uuid";

const Users = (props) => {
  return (
    <section className={style.users}>
      {props.users.map((user) => {
        const newUser = { user, id: uuidv4() };
        return (
          <User
            {...newUser}
            key={newUser.id}
            onRemoveUsers={props.onRemoveUsers}
          />
        );
      })}
    </section>
  );
};

export default Users;
