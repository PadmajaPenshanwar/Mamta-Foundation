import "./App.css";
import "./components/AboutUs"
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";


import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Events from "./routes/Events";
import Contact from "./routes/Contact";
import Donation from "./routes/Donation";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/donation" element={<Donation/>}/>
      </Routes>
   
      <Navbar/>
    </div>
  );
}
//  import React from 'react';
//  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import Navbar from './Navbar';
// // import Home from './Home';
// // import About from './About';
// // import Contact from './Contact';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
