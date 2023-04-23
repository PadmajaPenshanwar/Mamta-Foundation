import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
 class Navbar extends Component
    {
    state = { clicked: false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    // console.log(history) ;
    // const getColor=(curr) => {
    //     if(history.location.pathname===curr){
    //         return "#1898F5";
    //     }
    // }
     render(){
        
        return(
            <nav className="NavbarItems">
                <div className="navbar-logo">
                <img src="./img/logo.png" alt="logo" />
                </div>
                
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url} >{item.title}</Link>
                                
                            </li>
                        )
                    })}
                    
                    <button>Donation</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar;













































// import { ReactDOM } from "react-dom";
// import {BrowserRouter,Link,Switch,Route,Routes} from 'react-router-dom';
// import About from "./About";
// import Services from "./Services";

// //import { MenuItems } from "./MenuItems";
// //import { Link } from "react-router-dom";
// // import { NavLink } from "react-router-dom";

// function Navbar() {
//     state = {clicked: false};
//     handleClick = () =>{
//         this.setState({clicked: !this.state.clicked})
//     }
    
//     return (
//         <div>
//         <nav>
//         <div className="logo">
//             <img src="./img/logo.png" alt="logo" />
//         </div>
//         <div>
//             <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/About">About</Link></li>
//             <li><Link to="/Services">Services</Link></li>
//             <li><Link to="/">Events</Link></li>
//             <li><Link to="/">Contact</Link></li>
//             <li><button><Link to="/">Donation</Link></button></li>
//             </ul>
//             <Routes>
//             <Route path="/About" element={<About/>}/>
//             <Route path="/Services" element={<Services/>}/>
//             </Routes>
            
//         </div>
//         <div id="mobile" onClick={this.handleClick}>
//             <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         </nav>
//         </div>
//     )
// }
// ReactDOM.render(
//     <BrowserRouter>
//     <Navbar></Navbar>
//     </BrowserRouter>,
//     document.getElementById("root")
// );




// export default Navbar;