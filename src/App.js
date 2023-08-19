import logo from "./logo.svg";
import "./App.css";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import { FaApple, FaAws } from "react-icons/fa";
import ReactBootstrap from "./Components/React-Bootstrap/ReactBootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import STATE from "./STATE";
import EVENT_HANDLER_CLASS from "./EVENT-HANDLER-CLASS/index";

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

import React from "react";
import Child from "./STATE_LIFTING/child";
import Ground from "./STATE_LIFTING/Ground";
import Todos from './TODO_APP/Todos'
import Todo from './TODO_APP/Todo'
import Home from './TODO_APP/Home'

export default function App() {
  // const data = "I am from parent";

  // const handleChildData = (childData) => {
  //   console.log(childData);
  // };

  return (
    <div>
      {/* <Child data2={data} onChangeChildData={handleChildData} />
      <Ground /> */}
      {/* <Todos />
      <Todo /> */}
      <Home />
      
    </div>
  );
}
