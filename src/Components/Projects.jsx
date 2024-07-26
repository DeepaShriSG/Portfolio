import React from "react";
import Card from "./Card"

let data = [
  {
    imgurl:"/capstone.png",
    title:"Motorcycle Service Management",
    description:"The system facilitates efficient assignment of engineers to fulfill user requests by admins, enhancing the overall service experience",
    link:"https://motorcycleservice.netlify.app/"

  },
  {
    imgurl:"/ecommerce.png",
    title:"Ecommerce",
    description:"This is a modern eCommerce application built with React, React Router, and various supporting libraries and services. The application allows users to browse products, manage a shopping cart, and proceed to checkout. It also includes features for user registration and authentication.",
    link:"https://ecomshallow.netlify.app/"

  },
  {
    imgurl:"/BlogApp.png",
    title:"Blog APP",
    description:" Developed a dynamic blog application featuring user authentication and admin approval functionality",
    link:"https://dheblogs.netlify.app/",
  },
  {
    imgurl:"/Restaraunt.png",
    title:"Restaurant-Landing-page",
    description:"Worked on a responsive Restaurant Landing Page using Bootstrap, enhancing its online presence and accessibility.",
    link:"https://super-gnome-f7b880.netlify.app/"

  },
  {
    imgurl:"/forgotemail.png",
    title:"Email Reset Password",
    description:"Implemented a secure email-based password reset system featuring an intuitive interface and robust verification mechanisms for enhanced security and user experience.",
    link:"https://strong-pastelito-1aff28.netlify.app/"

  },
  {
    imgurl:"/React-Redux.png",
    title:"Notes App(React-Redux)",
    description:"A dynamic web application designed to manage personal notes, featuring a user-friendly interface built with React and Redux. This app allows users to seamlessly add, edit, and delete notes, with real-time state management ensuring a responsive and intuitive experience.",
    link:"https://sparkly-dodol-1b8636.netlify.app/"
  },

]


function Projects() {
  return (
    <>
    <div  data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading2">
    <section className="m-3 scrollspy-example">
      <div className="container">
        <h1 className="text-start" >Projects</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4 py-3 m-3">
        <Card data={data}/>
        </div>
      </div>
      </section>
    </div>
    </>
  );
}

export default Projects;
