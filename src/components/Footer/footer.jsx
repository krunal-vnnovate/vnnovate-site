/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import Image from "next/image";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item md-mb50">
              <div className="title">
                <h5>About Us
                </h5>
              </div>
              <ul>
              <li>
                  <div className="cont">
                    <h6>Know More About Us</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Careers</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Client testimonial</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Case Study</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Blog </h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Contact US</h6>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item md-mb50">
              <div className="title">
                <h5>Our Services
                </h5>
              </div>
              <ul>
              <li>
                  <div className="cont">
                    <h6>Web Development</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Mobile Development</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Software Consulting</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Enterprise Software Development</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>Resource Augmentation </h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>UI/UX Design Service</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>DevOps & Cloud</h6>
                  </div>
                </li>
             
                <li>
                  <div className="cont">
                    <h6>Power BI</h6>
                  </div>
                </li>

                <li>
                  <div className="cont">
                    <h6>AI/ML</h6>
                  </div>
                </li>

              </ul>
            </div>
          </div>
         
        </div>
      </div>
      <div className="container">
      <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <Image height="70" width={"250"} src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2024, Made with passion by
                  <Link
                    href="https://themeforest.net/user/themescamp/portfolio"
                    
                  >
                    <a target="_blank">Vnnovate Solutions PVT. LTD. </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          </div>
    </footer>
  );
};

export default Footer;
