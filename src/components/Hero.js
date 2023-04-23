import React from "react";
import "./HeroStyles.css"
 function Hero() {
     return (
         <>
         <div className="hero">
             <img alt="heroImg" src="/img/hero.jpg" width="100%"height="40%"/>
         </div>
         </>
     )
      
 }

// export const Hero = (props) => {
//     return(
//         <div className="hero">
//             <img alt="heroImg" src={props.img} width="100%"height="40%"/>
//         </div>
//     )
// }

export default Hero;