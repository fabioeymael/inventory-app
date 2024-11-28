import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"; // Import the Home component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <h1>Household Inventory</h1>
//           <p>Start managing your products and clothes!</p>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
