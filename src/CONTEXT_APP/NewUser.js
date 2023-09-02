import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../CNTX_HOOKS/useUserContex";

//----------------Using UseReducer--------------

const NewUser = () => {
  const { addUser } = useUserContext();

  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: uuidv4(), username: username };
    addUser(newUser)

    setUsername("");
  };

  return (
    <div>
      <h2>User Registrati on</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

//------------------ Using useContext-----------------

// const NewUser = () => {
//   const { setUsers } = useUserContext();

//   const [username, setUsername] = useState("");

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = { id: uuidv4(), username: username };
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//     setUsername("");
//   };

//   return (
//     <div>
//       <h2>User Registrati on</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <button type="submit">Add User</button>
//       </form>
//     </div>
//   );
// };

// const NewUser = ({handleAddNewUser}) => {
//   const [username, setUsername] = useState("");
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = { id: uuidv4(), username: username };
//     handleAddNewUser(newUser)
//     setUsername("");
//   };

//   return (
//     <div>
//       <h2>User Registrati on</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <button type="submit">Add User</button>
//       </form>
//     </div>
//   );
// };

export default NewUser;
