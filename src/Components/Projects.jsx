import React from "react";


function Projects() {
  return (
    <>
    <div  data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading2">
    <section className="m-5 scrollspy-example">
      <div className="container">
        <h1 className="text-start" >Projects</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4 py-3 m-3">
          <div className="col" >
            <div className="card">
              <img src="/capstone.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Motorcycle Service Management
                  </h5>
                <p className="card-text">
                     The system facilitates efficient
                    assignment of engineers to fulfill user requests by admins, enhancing
                    the overall service experience.
                </p>
                <a
                    href="https://brilliant-nasturtium-1fbae3.netlify.app/"
                    className="btn btn-primary"
                    target="blank"
                    
                  >
                    Visit Site
                  </a>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card">
              <img src="/BlogApp.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Blog APP
                  </h5>
                <p className="card-text">
                Developed a dynamic blog application featuring user authentication and admin approval functionality
                </p>
                <a
                    href="https://dheblogs.netlify.app/"
                    className="btn btn-primary"
                    target="blank"
                   
                  >
                    Visit Site
                  </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/Restaraunt.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Restaurant-Landing-page
                  </h5>
                <p className="card-text">
                Worked on a responsive Restaurant Landing Page using Bootstrap, enhancing its online presence and accessibility.
                </p>
                <a
                    href="https://super-gnome-f7b880.netlify.app/"
                    target="blank"
                    className="btn btn-primary"
                   
                  >
                    Visit Site
                  </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/forgotemail.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Email Reset Password
                  </h5>
                <p className="card-text">
                Implemented a secure email-based password reset system featuring an intuitive interface and 
                robust verification mechanisms for enhanced security and user experience.
                </p>
                <a
                    href="https://strong-pastelito-1aff28.netlify.app/"
                    target="blank"
                    className="btn btn-primary"
                  >
                    Visit Site
                  </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card m-2 ">
              <div className="card-body">
                <h5 className="card-title">
                  Hall Booking System
                  </h5>
                <p className="card-text">
                Developed a mini project to efficiently manage event hall bookings, 
                facilitating seamless reservation and scheduling for event organizers.
                </p>
                <a
                    href="https://github.com/DeepaShriSG/hallBooking"
                    target="blank"
                    className="btn btn-primary"
                  >
                    Get code
                  </a>
              </div>
            </div>

            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">
                  Mentors Assignment
                  </h5>
                <p className="card-text">
                Created a mini project aimed at streamlining the assignment process for mentors, 
                enhancing organization and efficiency in mentorship programs.
                </p>
                <a
                    href="https://github.com/DeepaShriSG/AssignMentor"
                    target="blank"
                    className="btn btn-primary"
                   
                  >
                    Get code
                  </a>
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

export default Projects;
