import React,{useEffect} from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Form from "react-bootstrap/Form";
import { Formik} from "formik";
import * as Yup from "yup";

function Contact() {

const publicKey = `${import.meta.env.VITE_PUBLIC_KEY}`;
const serviceId = `${import.meta.env.VITE_SERVICE_ID}`;
const templateId =`${import.meta.env.VITE_TEMPLATE_ID}`;
  
  const form = useRef(null);

  const sendEmail = (values) => {

    emailjs
      .sendForm( serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          toast.error('TRY AGAIN', error.text);
        },
      );
  };

  const ContactSchema = Yup.object().shape({
     
     from_name:Yup.string().required('*Required'),
     user_email:Yup.string().required('*Required'),
     message:Yup.string().required('*Required')

    })

    return (
      <>
        <div className="contact-section p-2" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" tabIndex="0" id="scrollspyHeading5">
          <section className="contact-section scrollspy-example">
            <div className="m-4">
              <div className="container">
                <h1 className="p-3 contact-heading">Lets Connect!</h1>
                <h5 className="p-3 mx-4 contact-subtitle">
                  If you're interested to know more about my work or have any
                  questions, feel free to reach out. I'm always open to connecting.
                  Looking forward to hearing from you!
                </h5>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    message: ''
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, { resetForm }) => {
                    sendEmail(values);
                    resetForm({});
                  }}
                >
                  {({ errors, touched, handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit} 
                    className="m-2"
                    ref={form}
                    >
                      <Form.Group className="m-4">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                          type="text"
                          name="from_name" 
                          placeholder="Enter your name"
                          onChange={handleChange}
                          // style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}
                        />
                        {errors.from_name && touched.from_name ? (
                          <div style={{ color: 'red' }}>{errors.from_name}</div>
                        ) : null}
                      </Form.Group>
  
                      <Form.Group className="m-4">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="email"
                          name="user_email"
                          placeholder="Enter your Email"
                          onChange={handleChange}
                          style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}
                        />
                        {errors.user_email && touched.user_email ? (
                          <div style={{ color: 'red' }}>{errors.user_email}</div>
                        ) : null}
                      </Form.Group>
  
                      <Form.Group className="m-4">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="Hi! How are you?"
                          onChange={handleChange}
                          style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}
                        />
                        {errors.message && touched.message ? (
                          <div style={{ color: 'red' }}>{errors.message}</div>
                        ) : null}
                      </Form.Group>
  
                      <div className="m-4 text-center">
                        <button className="btn submit-btn m-2" type="submit" value="Send">
                          Send mail
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
  
  export default Contact;


