import React from 'react';
import "./AboutUsStyles.css"

const AboutUs = () => {
    return(
        <div className="aboutus">
            <h1>About Us</h1>
            <p>'Mamta' is a project for the welfare of HIV positive children and women. 
                We are registered under the Charitable Trust Act of India.
                Mamta is among the very few residential projects in this field. We started on 19th July 2008. 
                Currently, Mamta shelters 30 children and 5 women in a 2500 sq.ft. area Bunglow at Kondhwa in the Pune city, Maharashtra state, India.</p>
            <div className="first">
                <div className="text">
                    <h2>OUR MISSION</h2>
                    <p>Today in India,there are more than 5.7 million registered HIV +ve 
                        cases as per Indian Health Dept & NACO. Maharashtra ranks fourth in 
                        the country for registered cases and Pune, within Maharashtra, ranks
                         second.The social stigma for HIV +ve children and women is prevalent
                          across the country.Hence these women and children,particularly from 
                          poor and rural households are turned away from their homes and families 
                          after deaths of their parent(s) / spouse. Mamta foundation,through the
                           aims to assist in the rehabilitation and welfare of these children and 
                           women. </p>
                </div>
                <div className="image">
                    <img alt="img" src="/img/mission1.jpg"/>
                    <img alt="img" src="/img/mission2.jpg"/>
                </div>

            </div>
            <div className="first">
            <div className="image">
                    <img alt="img" src="/img/vision1.jpg"/>
                    <img alt="img" src="/img/vision2.jpg"/>
                </div>
                <div className="text">
                    <h2>OUR VISION</h2>
                    <p>our primary aim is to increase the life span by providing high protein diet, 
                        nutritional support and medical treatment, bring them in the main stream by 
                        providing basic education and exposure to society, provide rehabilitation, 
                        community health, women empowerment and spreading awareness and enabling social
                         acceptance. We create an atmosphere of love, care, happiness and understanding 
                         for each child to ensure physical, emotional and overall development.
                        We call upon all of you to join us in transforming the lives of children and 
                        women living with HIV AIDs. </p>
                </div>
                

            </div>
        </div>
    )
}
export default AboutUs;