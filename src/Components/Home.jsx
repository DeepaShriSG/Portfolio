import React from 'react'
import Skills from './Skills';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer'
import Socials from "./Socials";

function Home() {
   
 
    return <> 
                  <div id="wrapper">
                       
                       <Header/>
                       <Socials/>
                       <Projects/>
                       <Skills/>
                       <Contact/>
                       <Footer/>
                  </div>
    </>

}

export default Home