import React from "react";
import { useUserContext } from "../CNTX_HOOKS/useUserContex";

//-------------------- Using useReducer---------------

const User = ({ user }) => {
  const { deleteUser } = useUserContext();
  const { id, username } = user;

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;

// const User = ({ user }) => {
//   const { users, setUsers } = useUserContext();
//   const { id, username } = user;

//   const handleDelete = (id) => {
//     const filter = users.filter((user) => user.id !== id);
//     setUsers(filter);
//   };

//   return (
//     <article className="user">
//       <h2>{id}</h2>
//       <p>{username}</p>
//       <button
//         onClick={() => {
//           handleDelete(id);
//         }}
//       >
//         Delete
//       </button>
//     </article>
//   );
// };

// export default User;
