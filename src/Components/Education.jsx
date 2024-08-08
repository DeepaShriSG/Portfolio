import React from "react";

function Education() {
  let data = [
    {
      position: "left",
      title: "Experience",
      subtitle: "Online Tutor",
      organization: "Focus Edumatics",
      duration: "Feb 2022 - Jul 2023",
    },
    {
      position: "right",
      title: "Graduation",
      subtitle: "UG",
      organization: "Akshaya College of Engineering and Technology,Coimbatore",
      duration: "Aug 2016 - May 2020",
    },
    {
      position: "left",
      title: "Higher Education",
      subtitle: "12th State-Board",
      organization: "Nirmala Matha Convent Matriculation Higher Secondary School,Coimbatore",
      duration: "Jun 2015 - Apr 2016",
    },
    {
      position: "right",
      title: "Elementary Education",
      subtitle: "10th State-Board",
      organization: "Nirmala Matha Convent Matriculation Higher Secondary School,Coimbatore",
      duration: "Jun 2013 -  2014",
    },
  ];

  return (
    <>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading4">
        <section className="m-5 scrollspy-example bsb-timeline-4 bg-light py-3 py-md-5 py-xl-8">
          <div className="container">
            <h1 className="heading-light-background">About</h1>
            <div className="row justify-content-center">
              <div className="col-10 col-md-12 col-xl-10 col-xxl-9">
                <ul className="timeline">
              {
                data.map((e,i)=>{
                  return   <li className={`timeline-item ${e.position}`} key={i}>
                  <div className="timeline-body">
                    <div className="timeline-meta">
                      <div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-md-end">
                        <span>{e.duration}</span>
                      </div>
                    </div>
                    <div className="timeline-content timeline-indicator">
                      <div className="card border-0 shadow">
                        <div className="card-body p-xl-4">
                          <h2 className="card-title mb-2">{e.title}</h2>
                          <h6 className="card-subtitle text-secondary mb-3">{e.subtitle}</h6>
                          <p className="card-text m-0">
                           {e.organization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                })
              }
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Education;
