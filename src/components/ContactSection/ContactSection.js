import React from 'react'
 import "./ContactSectionStyles.css"
import {Container, Row, Col} from "react-bootstrap";
import {contactConfig} from "./contect_option"


//  function ContactSection() {
//   return (
//     <div>
//       {/*Section: Contact v.2*/}
// <section class="mb-4">

//     {/* Section heading */}
//     <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
//     {/* Section description */}
//     <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
//         a matter of hours to help you.</p>

//     <div class="row">

//         {/* Grid column */}
//         <div class="col-md-9 mb-md-0 mb-5">
//             <form id="contact-form" name="contact-form" action="mail.php" method="POST">

//                 {/* Grid row */}
//                 <div class="row">

//                     {/* Grid column */}
//                     <div class="col-md-6">
//                         <div class="md-form mb-0">
//                             <input type="text" id="name" name="name" class="form-control"/>
//                             <label for="name" class="">Your name</label>
//                         </div>
//                     </div>
//                     {/* Grid column */}

//                     {/* Grid column*/}
//                     <div class="col-md-6">
//                         <div class="md-form mb-0">
//                             <input type="text" id="email" name="email" class="form-control"/>
//                             <label for="email" class="">Your email</label>
//                         </div>
//                     </div>
//                     {/* Grid column */}

//                 </div>
//                 {/* Grid row */}

//                 {/* Grid row */}
//                 <div class="row">
//                     <div class="col-md-12">
//                         <div class="md-form mb-0">
//                             <input type="text" id="subject" name="subject" class="form-control"/>
//                             <label for="subject" class="">Subject</label>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Grid row */}

//                 {/* Grid row */}
//                 <div class="row">

//                     {/* Grid column */}
//                     <div class="col-md-12">

//                         <div class="md-form">
//                             <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
//                             <label for="message">Your message</label>
//                         </div>

//                     </div>
//                 </div>
//                 {/* Grid row */}

//             </form>

//             <div class="text-center text-md-left">
//                 <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
//             </div>
//             <div class="status"></div>
//         </div>
//         {/* Grid column */}

//         {/* Grid column */}
//         <div class="col-md-3 text-center">
//             <ul class="list-unstyled mb-0">
//                 <li><i class="fas fa-map-marker-alt fa-2x"></i>
//                     <p>San Francisco, CA 94126, USA</p>
//                 </li>

//                 <li><i class="fas fa-phone mt-4 fa-2x"></i>
//                     <p>+ 01 234 567 89</p>
//                 </li>

//                 <li><i class="fas fa-envelope mt-4 fa-2x"></i>
//                     <p>contact@mdbootstrap.com</p>
//                 </li>
//             </ul>
//         </div>
//         {/* Grid column */}

//     </div>

// </section>
// {/* Section: Contact v.2 */}
//     </div>
//   )
// }

// export default ContactSection;


export default function ContactUs() {
  return(
    <Container className='main'>
        <Row className="nb-5 mt-3">
            <Col lg="8">
                <h1 className="display-4 mb-4">
                    <strong>Contact Us</strong>
                </h1>
            </Col>
        </Row>
        <Row className="sec_sp">
            <Col lg='5' className="mb-5">
                <h3 className="color_sec py-4">Get in touch</h3>
                <address>
                    <strong>Email : mamta_foundation@rediffmail.com</strong>
                    <br/>
                    <br/>
                    <p>
                        <strong>Phone : 9604519451<br/>
                                        7709870064
                        </strong>
                    </p>
                </address>
                <p>{contactConfig.description}</p>
            </Col>

            <Col lg='7' className="d-flex align-items-center">
                <form className='contact__form w-100'>
                    <Row>
                    <Col lg='6' className="form-group">
                            <input 
                            className="form-control rounded-0"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                            />
                        </Col>
                        <Col lg='6' className="form-group">
                            <input 
                            className="form-control rounded-0"
                            id="name"
                            name="name"
                            placeholder="Email"
                            type="email"
                            />
                        </Col>
                    </Row>
                    <textarea className='form-control rounded-0'
                     id="message" 
                     name="message"
                     placeholder="Message"
                     rows='5'
                    ></textarea>
                    <br/>
                    <Row>
                        <Col lg='12' className="form-group">
                            <button className="btn ac_btn" type="submit">Send</button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
  )
}
