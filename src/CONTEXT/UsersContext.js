import React, { createContext, useState, useReducer } from "react";
import { initialState, reducer } from "./usersReducer";

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    users: state.users,
    addUser: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;

// import React, { createContext, useState } from "react";

// export const UsersContext = createContext({});

// const UsersProvider = ({ children }) => {

//   const [users, setUsers] = useState([
//     { id: 1, username: "jahidul" },
//     { id: 2, username: "Farid" },
//     { id: 3, username: "Akber" },
//   ]);

//   return (
//     <UsersContext.Provider value={{ users, setUsers }}>
//         {children}
//     </UsersContext.Provider>
//   );
// };

// export default UsersProvider;
