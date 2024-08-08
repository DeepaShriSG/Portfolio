import React,{useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Socials() {

   
    
    useEffect(() => {

        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });

        
        AOS.init();

    }, [])

    


    return <>
        <div className= "socials d-grid justify-content-end align-items-end mx-3 mb-5 me-0">
            <div className="navbar-nav" 
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000" data-aos-easing="ease-out-in">

                 <a className="nav-link " href="https://www.leetcv.com/r/deepa_shri_4542"
                    data-bs-toggle="tooltip" title="View Resume" target="_blank">
                    <i className='bx bxs-user-detail'></i> &nbsp;  </a>

                <a className="nav-link" href="https://www.linkedin.com/in/deepa-shri-1796511b5"
                    data-bs-toggle="tooltip" title="https://www.linkedin.com/in/deepa-shri-1796511b5" target="_blank">
                    <i className='bx bxl-linkedin-square' >
                    </i>
                </a>
                <a className='nav-link' href="mailto:deepashrig15@gmail.com"
                    data-bs-toggle="tooltip" title="mailto:deepashrig15@gmail.com" target="_blank">
                    <i className='bx bxl-gmail'  > </i> &nbsp;  </a>

                <a className="nav-link " href="https://github.com/DeepaShriSG"
                    data-bs-toggle="tooltip" title="https://github.com/DeepaShriSG" target="_blank">
                    <i className='bx bxl-github'> </i> &nbsp;  </a>

            </div>
            <div className="vr d-none d-lg-block d-md-block right-vr "></div>
        </div>

        
    </>
}

export default Socials