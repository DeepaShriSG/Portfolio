import React from "react";
import Card from "./Card"

let data = [
  {
    imgurl:"/capstone.png",
    title:"Motorcycle Service Management",
    description:"Description: The system enhances the service experience by efficiently assigning engineers to user requests.",
    Frontend: "React-Vite, HTML, CSS, Bootstrap,Axios,JavaScript,ChartJs and Formik",
    Backend: "Node.js,Express.js,BycryptJs,Cors,Nodemailer,DotEnv,JsonWebToken,Mongoose",
    Database: "MongoDB",
    Authentication: "JWT",
    link:"https://motorcycleservice.netlify.app/",
    client:"https://github.com/DeepaShriSG/MotorService-FE",
    server:"https://github.com/DeepaShriSG/MotorcycleService-BE"

  },
  {
    imgurl:"/chatApp.png",
    title:"WebChat",
    description:"ChatApp ChatApp is a real-time messaging application that allows users to start conversations, send messages, and manage active users. Built with React, Socket.IO, and Axios, it provides a seamless chat experience.",
    Frontend: "React-Vite, HTML, CSS, Bootstrap,Axios,JavaScript and Formik",
    Backend: "Node.js,Express.js,BycryptJs,Cors,Nodemailer,DotEnv, JsonWebToken,Mongoose,socket.io,validator",
    Database: "MongoDB",
    Authentication: "JWT",
    link:"https://messengerfe.netlify.app/",
    client:"https://github.com/DeepaShriSG/MessengerFE",
    server:"https://github.com/DeepaShriSG/Messenger-BE"

  },
  {
    imgurl:"/ecommerce.png",
    title:"Ecommerce",
    description:"This is a modern eCommerce application built with React, React Router, and various supporting libraries and services. The application allows users to browse products, manage a shopping cart, and proceed to checkout. It also includes features for user registration and authentication.",
    Frontend: "React-Vite, HTML, CSS, Bootstrap,Axios,JavaScript and Formik",
    Backend: "Node.js,Express.js,BycryptJs,Cors,@vonage/server-sdk,stripe",
    Database: "MongoDB",
    Authentication: "JWT",
    link:"https://ecomshallow.netlify.app/",
    client:"https://github.com/DeepaShriSG/Ecom-FE",
    server:"https://github.com/DeepaShriSG/Blog-BE"

  },
  {
    imgurl:"/BlogApp.png",
    title:"Blog APP",
    description:" Developed a dynamic blog application featuring user authentication and admin approval functionality",
    Frontend: "React-Vite, HTML, CSS, Bootstrap,Axios,JavaScript,TypedJs and Formik",
    Backend: "Node.js,Express.js,BycryptJs,Cors",
    Database: "MongoDB",
    Authentication: "JWT",
    link:"https://dheblogs.netlify.app/",
    client:"https://github.com/DeepaShriSG/Blog-FE",
    server:"https://github.com/DeepaShriSG/Blog-BE"
  },
  {
    imgurl:"/Restaraunt.png",
    title:"Restaurant-Landing-page",
    description:"Worked on a responsive Restaurant Landing Page using Bootstrap, enhancing its online presence and accessibility.",
    Frontend: "React-Vite, HTML, CSS, Bootstrap",
    Backend: "",
    Database: "",
    Authentication: "",
    link:"https://super-gnome-f7b880.netlify.app/",
    client:"https://github.com/DeepaShriSG/Restaurant-Landing-page",
    server:""

  },
  {
    imgurl:"/forgotemail.png",
    title:"Email Reset Password",
    description:"Implemented a secure email-based password reset system featuring an intuitive interface and robust verification mechanisms for enhanced security and user experience.",
    Frontend: "React-Vite, HTML, CSS, Bootstrap,Axios,JavaScript,Formik",
    Backend: "Node.js,Express.js,BycryptJs,Cors",
    Database: "MongoDB",
    Authentication: "JWT",
    link:"https://strong-pastelito-1aff28.netlify.app/",
    client:"https://github.com/DeepaShriSG/Email-FE",
    server:""

  },
  {
    imgurl:"/React-Redux.png",
    title:"Notes App(React-Redux)",
    description:"A dynamic web application designed to manage personal notes, featuring a user-friendly interface built with React and Redux. This app allows users to seamlessly add, edit, and delete notes, with real-time state management ensuring a responsive and intuitive experience.",
    Frontend: "React-Vite, HTML, CSS, Bootstrap,React-Redux",
    Backend: "",
    Database: "",
    Authentication: "",
    link:"https://sparkly-dodol-1b8636.netlify.app/",
    client:"https://github.com/DeepaShriSG/NotesRedux",
    server:""
  },

]


function Projects() {
  return (
    <>
    <div  data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading2">
    <section className="m-3 scrollspy-example">
      <div className="container">
        <h1 className="heading-light-background">Projects</h1>
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
