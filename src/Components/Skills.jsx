import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {

  return (
    <>
      <div className="contact-section p-2" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading3">
        <section className="m-5 scrollspy-example">
          <div className="row">
          <div className="container ">
            <h1 className="heading-dark-background">Skills</h1>
            <div className="row p-3 m-lg-3 align-items-center text-center">
              <div className=" col-sm-3 col-lg-4 col-md-6">
                <div className="tag-heading d-flex justify-content-center align-items-center text-center">
                  <p className="p-lg-3 tag-heading text-white">TAGS</p>
                  <div className="vr skills-vr d-none d-lg-block d-md-block mx-2"></div>
                </div>
              </div>

              <div className="tag-content col-sm-3 col-lg-8 col-md-6">
                <p className="skill-content">
                  HTML<strong className="text-dark-emphasis">(11)</strong> &nbsp; CSS<strong className="text-dark-emphasis">(11)</strong> &nbsp; JAVASCRIPT<strong className="text-dark-emphasis">(11)</strong>
                </p>
                <p className="skill-content">
                  REACT<strong className="text-dark-emphasis">(8)</strong> &nbsp; BOOTSTRAP<strong className="text-dark-emphasis">(8)</strong> &nbsp; REACT-REDUX<strong className="text-dark-emphasis">(2)</strong>
                </p>
                <p className="skill-content">
                  MONGODB<strong className="text-dark-emphasis">(11)</strong> &nbsp; MYSQL <strong className="text-dark-emphasis">(2)</strong> &nbsp;
                  EXPRESSJS<strong className="text-dark-emphasis">(11)</strong>
                  &nbsp; NODEJS<strong className="text-dark-emphasis">(8)</strong>
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        
      </div>
    </>
  );
}

export default Skills;
