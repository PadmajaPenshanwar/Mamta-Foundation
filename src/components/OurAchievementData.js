import React from 'react';
import "./AchievementsStyles.css"

function OurAchievementData(props){
    return(
        <div className="a-card">
            <h1>{props.number}</h1>
            
                <h4>{props.text}</h4>   
        </div>
    )
}
export default OurAchievementData;