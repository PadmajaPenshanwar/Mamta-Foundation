import React from 'react';
import "./FooterStyles.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                <img src="./img/logo.png" alt="logo" />
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>About Us</h4>
                    <p>Mamta Foundation is a non-profit<br/>
                    registered organization working<br/>
                    for welfare of HIV positive <br/>
                    children and women.</p>    
                    
                </div>
                <div>
                    <h4>Useful Links</h4>
                    <a href="/">
                        <i className="fa-brands fa-square-instagram"/>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-facebook"/>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-youtube"/>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-twitter"/>
                    </a>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    Address: S.No. 16/4,<br/>
                    <p>Gujar-Nimbalkarwadi Road,<br/>
                    Katraj, Pune-411 046.<br/>
                    Phone No: 7709870064, 9987601994<br/>
                    Email: mamta_foundation@rediffmail.com<br/>
                    Website: mamtafoundation.org.in</p>
                </div>
                  <div>
                 <h4>Location</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.1952343032417!2d73.87025651411346!3d18.429442676766637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb1b00000001%3A0x2f65becafe46a4e2!2sMamta%20Foundation!5e0!3m2!1sen!2sin!4v1676294476435!5m2!1sen!2sin" ></iframe>
                </div>  
            
            </div>
        </div>
    )
}
export default Footer;