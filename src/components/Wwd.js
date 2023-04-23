import React from "react";
import "./WwdStyles.css"
import WwdData from "./WwdData";
import img1 from "./WwdImg/education.jpg"
import img2 from "./WwdImg/medication.jpg"
import img3 from "./WwdImg/activities.jpg"

function Wwd(){
    return(
        <div className="Wwd">
            <h1>What We Do</h1>
            <div>
                <p>We admit HIV +ve children and women who are orphans, widows and poor & who have been stunned from their families. We help them by providing basic needs of food, clothing, shelter & education.</p>
            </div>
            <div className="tripcard">
                <WwdData 
                image={img1}
                heading ="EDUCATION"
                />
                <WwdData 
                image={img2}
                heading ="MEDICATION"
                />
                <WwdData 
                image={img3}
                heading ="ACTIVITIES"
                />
            </div>
            
        </div>
    )
}
export default Wwd;