import React from "react";
import User from "./User";
import { useUserContext } from "../CNTX_HOOKS/useUserContex";

//----------------Using UseReducer-----------------

const Users = () => {
  const { users } = useUserContext();

  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;

//----------------Using useContext-----------------

// const Users = () => {
//   const {users } = useUserContext();

//   return (
//     <section className="users">
//       {users.map((user) => (
//         <User key={user.id} user={user} />
//       ))}
//     </section>
//   );
// };

// export default Users;

// const Users = ({ handleDeleteUser }) => {
//   const { users, setUsers } = useContext(UsersContext);

//   return (
//     <section className="users">
//       {users.map((user) => (
//         <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
//       ))}
//     </section>
//   );
// };
