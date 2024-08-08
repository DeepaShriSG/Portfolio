import React, { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";


function Header() {

  let ref = useRef();

  useEffect(() => {
    AOS.init();

    const typed = new Typed(ref.current, {
      strings: [' <h2>Full Stack Web Developer</h2>','<h2>Backend Developer</h2>', '<h2>Frontend Developer</h2>','<h2>Backend Developer</h2>' ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  
    return () => {
      typed.destroy();
    }

  }, []);

  return  <>  
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading1">
  <header className="w-100 vh-100 scrollspy-example" style={{ backgroundColor: "#00002e" }}>
        <Navbar />
        <section className="hero-section">
          <div className="container">
            <div className="d-grid grid-column justify-content-start">
              <div className="hero-content col-lg-12 p-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000" data-aos-easing="ease-out-in">
                <h5 className="px-2">Hi I'm,</h5>
                <p className="px-2 title-name">Deepa Shri.</p>
                <h3 className="px-2">A <span ref={ref} style={{color:"#fed766" , display: "inline-block"}} ></span>&nbsp;</h3>
                <h5 className="px-2">
                  I'm currently diving deep into creating and enhancing websites
                  to make them super fast and effective.
                </h5>
              </div>
          </div>

          </div>
         
        </section>
        

         
            
      </header>
  </div>
 
      
    </>
  
}

export default Header;
