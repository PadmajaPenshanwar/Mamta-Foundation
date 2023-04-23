import React from 'react';
import OurAchievementData from "./OurAchievementData"
//import "./AchivementsStyle.css"

function Achievements() {
    return(
        <div className="achivement">
            <h1>Our Achievements in Numbers</h1>
            <div className="card">
                <OurAchievementData 
                number="15+"
                text="Years Of Experience"
                />
                <OurAchievementData
                number="100+"
                text="Happy Childrens"
                />
                <OurAchievementData
                number="50+"
                text="Events"
                />
                <OurAchievementData
                number="10+"
                text="Fund Raised"
                />

            </div>
        </div>
    )
}
export default Achievements;