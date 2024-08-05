import React, { useEffect,useState } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

function Navbar() {

    let [scroll,setscroll] = useState(false);
    
    useEffect(() => {
        AOS.init();

        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    }, [])

    const handleScroll = ()=>{ (window.scrollY > 70) ? setscroll(true)  :  setscroll(false);   }


  return <>
           <nav className= {`navbar navbar-expand-lg fixed-top ${scroll ? "navbg" : "default"}`} id="navbar-example2">
                    
                    <a className="navbar-brand px-3 mx-3" href="#">
                        <img src="/Ds logo.jpg" className="rounded-circle" alt="" srcSet="" width={50} height={50} />
                    </a>

                    <div className="menu px-3 mx-3">
                        <button className="navbar-toggler shadow-none outline-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" aria-label="offcanvasTopLabel">
                            <i className='bx bx-menu-alt-right' style={{ color: "#6f726a", fontSize: "36px" }} ></i>
                        </button>
                    </div>

                    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <div className="offcanvas-title" id="offcanvasTopLabel">
                                <a className="navbar-brand" href="#" >
                                    <img src="/Ds logo.jpg" className="rounded-circle" alt="" srcSet="" width={50} height={50} />
                                </a>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" data-aos-easing="ease-out-in">
                            <ul className="nav nav-pills navbar-nav justify-content-end flex-grow-1 pe-5">
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#scrollspyHeading1" >Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#scrollspyHeading2">Projects</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#scrollspyHeading3">Skills</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#scrollspyHeading4">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#scrollspyHeading5">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                

            </nav>

                
                
                
            
  </>
}

export default Navbar