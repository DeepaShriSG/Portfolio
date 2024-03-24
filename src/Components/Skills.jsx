import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
 

  return (
    <>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading3">
    <section className=" m-5 scrollspy-example" >
        <div className="container ">
          <h1 className="text-start">Skills</h1>
          <div className="row p-3 m-lg-3 align-items-center text-center">
            <div className=" col-sm-3 col-lg-4 col-md-6">
              <div className="tag-heading d-flex justify-content-center align-items-center text-center">
                <p className="p-lg-3 tag-heading">TAGS</p>
                <div className="vr skills-vr d-none d-lg-block d-md-block mx-2"></div>
              </div>
            </div>

            <div className="tag-content col-sm-3 col-lg-8 col-md-6">
              <p>
                HTML<strong>(9)</strong> &nbsp; CSS<strong>(9)</strong> &nbsp;
                JAVASCRIPT<strong>(7)</strong>
              </p>
              <p>
                REACT<strong>(5)</strong> &nbsp; BOOTSTRAP<strong>(6)</strong>
              </p>
              <p>
                MONGODB<strong>(6)</strong> &nbsp; EXPRESSJS<strong>(5)</strong>
                &nbsp; NODEJS<strong>(5)</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" container p-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item p-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <b>Frameworks</b>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Proficient in utilizing frameworks</strong> 
                   
                  <p>Utilized <b>Bootstrap framework</b> to create responsive and
                     visually appealing user interfaces for web applications.
                  </p>

                  <p>Demonstrated expertise in creating reusable components and 
                    managing application state using <b>React</b>'s component-based architecture. 

                    Integrated <b>Redux</b> for predictable state management in React applications, 
                    ensuring seamless data flow and enhanced scalability
                  </p>
                  
                  <p>
                  Leveraged the <strong>Node.js</strong> ecosystem and package management using npm 
                  to extend functionality in web applications.


                  Developed robust and scalable server-side applications with <b>Express.js</b>, 
                  utilizing its minimalist web framework for efficient routing and middleware handling.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item p-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                   <b>API Integration</b>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Experienced API Integrations</strong> 
                  <p>Created high-performance backend applications that seamlessly interact with external services, 
                    enhancing overall functionality and user experience</p>
                   
                   <div className="container d-flex align-items-center">
                   <i className='bx bx-chevrons-right'></i> 
                   <p className="m-0">API Integration for Data Retrieval</p>
                   </div>

                   <div className="container d-flex align-items-center">
                   <i className='bx bx-chevrons-right'></i> 
                   <p className="m-0">Third-Party Service Integration</p>
                   </div>


                   <div className="container d-flex align-items-center">
                   <i className='bx bx-chevrons-right'></i> 
                   <p className="m-0">Performance Monitoring and Optimization</p>
                   </div>
                </div>
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
