import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import { FaApple, FaAws } from "react-icons/fa";
import ReactBootstrap from "./Components/React-Bootstrap/ReactBootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import STATE from "./STATE";
import EVENT_HANDLER_CLASS from "./EVENT-HANDLER-CLASS/index";

import Child from "./STATE_LIFTING/child";
import Ground from "./STATE_LIFTING/Ground";
import Todos from "./TODO_APP/Todos";
import Todo from "./TODO_APP/Todo";
import Home from "./TODO_APP/Home";
import SignupFormik from "./Components/SignupFormik";
import DataFetch from "./HOOKS/DataFetch";
import FAQ from "./FAQ/FAQS";
import Countries from "./COUNTRIES_APP/Countries";
import "./App.css";
// import Search from "./COUNTRIES_APP/Search";
import useFetch from "./HOOKS/useFetch";
// import Users from "./USER_APP/Users";
import Search from "./USER_APP/Search";
import Users from "./CONTEXT_APP/Users";
import NewUser from "./CONTEXT_APP/NewUser";
import UsersProvider from "./CONTEXT/UsersContext";

const url = "https://restcountries.com/v3.1/all";

const userUrl = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  // const handleChildData = (childData) => {
  //   console.log(childData);
  // };

  // ------------------User App Ends-----------------
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [users, setUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState(users);

  // const fetchUser = async (userUrl) => {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(userUrl);
  //     const userData = await response.json();
  //     setUsers(userData);
  //     console.log(users);

  //     setFilteredUsers(users);
  //     setIsLoading(false);
  //     setError(null);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser(userUrl);
  // }, []);

  // const handleRemoveUser = (id) => {
  //   const filter = filteredUsers.filter((user) => user.id !== id);

  //   setFilteredUsers(filter);
  // };

  // const handleSearch = (searchValue) => {
  //   let value = searchValue.toLowerCase();

  //   const newUsers = users.filter((user) => {
  //     const userNew = user.name.toLowerCase();

  //     return userNew.startsWith(value);
  //   });
  //   setFilteredUsers(newUsers);
  // };
  // ------------------User App Ends-----------------

  //---------------- Country APP Ends-----------------

  //----------Country Data fetching

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [countries, setCountries] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState(countries);

  // const fetchData = async (url)=> {
  //   setIsLoading(true);

  //   try{
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     setCountries(data);
  //     setFilteredCountries(data);

  //     setIsLoading(false);
  //     setError(null);
  //   }
  //   catch(error) {
  //     setIsLoading(false);
  //     setError(error)
  //   }
  // }

  // useEffect(()=> {
  //   fetchData(url);
  // }, []);

  // const handleRemoveCountry = (name)=>{
  //   const filter = filteredCountries.filter((country)=>
  //     country.name.common !== name );

  //     setFilteredCountries(filter);
  // }

  // const handleSearch=(searchValue)=>{
  //   let value = searchValue.toLowerCase();

  //   const newCountries = countries.filter((country)=> {
  //     const countryName = country.name.common.toLowerCase();

  //     return countryName.startsWith(value);
  //   });
  //   setFilteredCountries(newCountries);
  // }

  //---------------- Country APP----------------

  return (
    <UsersProvider>
      <div>
        <NewUser />
        <Users />
      </div>
    </UsersProvider>


















    // <>

    //   {/* <Child data2={data} onChangeChildData={handleChildData} />
    //   <Ground /> */}
    //   {/* <Todos />
    //   <Todo /> */}
    //   {/* <Home /> */}
    //   {/* <SignupFormik  /> */}
    //   {/* <DataFetch />       */}
    //   {/* <FAQ /> */}

    //   {/* ----------------Country App Starts-------------- */}

    //   {/* <h1>Country App</h1> */}
    //   {/* <Search onSearch ={handleSearch}/>

    //   {isLoading && <h2>Loading...</h2>}
    //   {error && <h2>{error.message}</h2> }
    //   {countries && <Countries countries={filteredCountries}
    //   onRemoveCountry={handleRemoveCountry} /> }   */}

    //   {/* ----------------Country App Ends -------------- */}

    //   {/* ----------------User App Starts-------------- */}

    //   {/* <h1>User App</h1>
    //   <Search onSearch={handleSearch} />

    //   {isLoading && <h2>Loading...</h2>}
    //   {error && <h2>{error.message}</h2>}
    //   {users && (
    //     <Users users={filteredUsers} onRemoveUsers={handleRemoveUser} />
    //   )} */}

    //   {/* ----------------User App Ends-------------- */}

    //   {/* --------------------Use Contex App Starts------------------- */}

    //   {/* <NewUser handleAddNewUser={handleAddNewUser} />
    //   <Users users={users} handleDeleteUser={handleDeleteUser} /> */}

    //   {/* --------------------Use Contex App Ends------------------- */}

    //   </ >
  );
}
