import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  // console.log(history) ;
  // const getColor=(curr) => {
  //     if(history.location.pathname===curr){
  //         return "#1898F5";
  //     }
  // }
  //
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {/* <button>Donation</button> */}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
