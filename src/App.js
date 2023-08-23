import React, {useState, useEffect} from "react";

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
import Countries from './COUNTRIES_APP/Countries'
import './App.css'
import Search from "./COUNTRIES_APP/Search";

// function App() {
//   return (
//     // <div >
//     //  <h1>Welcome to React</h1>
//     //  <span >
//     //   <FaApple className='icon' />
//     //  </span>

//     //  <span >
//     //   <FaAws className='icon' />
//     //  </span>

//     //  <ReactBootstrap />
//     // </div>

//     <div>
//       <STATE count="0"/>
//     </div>

//   );
// }

// export default App;

// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <EVENT_HANDLER_CLASS />
//     </div>
//   )
// }

// import React from 'react'
// import EVENT_BINDING from './BINDING-EVENT/index'

// export default function App() {
//   return (
//     <div>
//       <EVENT_BINDING />
//     </div>
//   )
// }

// import React from 'react'
// import HOOKS_USE_STATE from './HOOKS_USE_STATE/index'
// import HOOKS_USE_STATE1 from './HOOKS_USE_STATE/index2'

// export default function App() {
//   return (
//     <div>
//       <HOOKS_USE_STATE />
//       <HOOKS_USE_STATE1 />
//     </div>
//   )
// }




  const url = "https://restcountries.com/v3.1/all";

export default function App() {
  // const data = "I am from parent";

  // const handleChildData = (childData) => {
  //   console.log(childData);
  // };

  //----------Country Data fetching
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const fetchData = async (url)=> {
    setIsLoading(true);

    try{
      const response = await fetch(url);
      const data = await response.json();

      setCountries(data);
      setFilteredCountries(data);

      setIsLoading(false);
      setError(null);
    } 
    catch(error) {
      setIsLoading(false);
      setError(error)
    }
  }

  useEffect(()=> {
    fetchData(url);
  }, []);
 
  
  const handleRemoveCountry = (name)=>{
    const filter = filteredCountries.filter((country)=> 
      country.name.common !== name );

      setFilteredCountries(filter);
  }

  const handleSearch=(searchValue)=>{
    let value = searchValue.toLowerCase();

    const newCountries = countries.filter((country)=> {
      const countryName = country.name.common.toLowerCase();
      
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  }

  return (
    <>
      {/* <Child data2={data} onChangeChildData={handleChildData} />
      <Ground /> */}
      {/* <Todos />
      <Todo /> */}
      {/* <Home /> */}
      {/* <SignupFormik  /> */}
      {/* <DataFetch />       */}
      {/* <FAQ /> */}
      <h1>Country App</h1>

      <Search onSearch ={handleSearch}/>

      {isLoading && <h2>Loading...</h2>}   
      {error && <h2>{error.message}</h2> }
      {countries && <Countries countries={filteredCountries} 
      onRemoveCountry={handleRemoveCountry} /> }  

    </>

  );
}
