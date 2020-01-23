import React from "react";
import Land_1 from "../images/landscaping/FB_102.jpg";
import Land_2 from "../images/landscaping/FB_103.jpg";
import Land_3 from "../images/landscaping/FB_104.jpg";
import Land_4 from "../images/landscaping/FB_105.jpg";
import Land_5 from "../images/landscaping/FB_106.jpg";
import Land_6 from "../images/landscaping/FB_107.jpg";
import Land_8 from "../images/landscaping/FB_108.jpg";




const Footer = (props) => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
        <section className="col-4 col-12-mobile">
                <header>
                  <h2 className="icon solid fa-home circled">
                    <span className="label">
                      Contact information
                    </span>
                  </h2>
                </header>
                <div className="address">
                  <ul className="contact">
                    <li>
                      <h3>Address</h3>
                      <span>
                        231 Tinton Place<br />
                        East Northport, NY 11731<br />
                      </span>
                    </li>
                    <li>
                      <h3>Email</h3>
                      <a href="mailto:jpierson@sbscoatings.com?subject= Hi John">jpierson@sbscoatings.com</a>
                    </li>
                    <li>
                      <h3>Phone</h3>
                      <span>Cell: 631-766-3353</span>
                      <span>Office: 631-393-6918</span>
                    </li>
                  </ul>
                </div>
                <section className="contact social">
                  <h3>Social</h3>
                  <ul className="icons">
                    <li><a href="https://www.facebook.com/specilatybuildingsolutions/" target="_balnk" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/specialtybuildingsolutions/?hl=en" target="_balnk" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://www.linkedin.com/company/specialty-building-solutions/about/" target="_balnk" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                  </ul>
                </section>
              </section>

                <section className="col-4 col-12-mobile">
                  <header id="contact">
                    <h2 className="icon solid fa-envelope circled">
                      <span className="label">Form</span>
                    </h2>
                    <h3>Contact us</h3>
                  </header>
                  <form method="POST" action="https://formspree.io/mwkprkzr">
                  <div className="fields">
                    <div className="field half">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name" placeholder="Your Name" />
                    </div>
                    <div className="field half">
                      <label for="email">Email</label>
                      <input type="text" name="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="field">
                      <label for="message">Message</label>
                      <textarea name="message" id="message" rows="5" placeholder="Say hello!"></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li><a href="" className="button submit">Send Message</a></li>
                  </ul>
                </form>
                </section>

              <section className="col-4 col-12-mobile">
                <header>
                  <h2 className="icon solid fa-camera circled"><span className="label">Photos</span></h2>
                </header>
                <div className="row gtr-25">
                  <div className="col-6">
                    <img className="image fit" src={Land_1} alt="" />
                  </div>
                  <div className="col-6">

                    <img className="image fit" src={Land_2} alt="" />
                  </div>
                  <div className="col-6">
                    <img  className="image fit" src={Land_3} alt=""/>
                  </div>
                  <div className="col-6">
                    <img className="image fit" src={Land_4} alt="" />
                  </div>
                  <div className="col-6">
                     <img className="image fit" src={Land_5} alt="" />
                  </div>
                  <div className="col-6">
                    <img  className="image fit" src={Land_6} alt="" />
                  </div>
                </div>
              </section>

          </div>
          <hr />

          <div className="row">
            <div className="col-12">
                <div className="copyright">
                  <ul className="menu">
                    <li>&copy; Specialty Building Solutions Inc</li>
                    <li>Design by:<a target="_blank" href="http://mattdoering.tech"> Matt Doering</a></li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>

  )


}

export default Footer;
