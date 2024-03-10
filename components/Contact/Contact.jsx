"use client"
import React, { useRef } from 'react'

// libraries
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const initialValues = {
    uName: "",
    uEmail: "",
    uMessage: ""
  }

  const validationSchema = Yup.object().shape({
    uName: Yup.string()
      .min(3, 'Too Short')
      .max(70, 'Too Long')
      .required('Required'),
    uEmail: Yup.string()
      .email('Invalid email')
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email")
      .required('Required'),
    uMessage: Yup.string()
      .required('Required'),
  });

  const onSubmit = (values, actions) => {
    emailjs
      .sendForm('service_ilh36pp', 'template_ifa07vi', form.current, {
        publicKey: 't6k50RZti9gU6EtFm',
      })
      .then(
        () => {
          toast.success('Form successfully submitted!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          actions.resetForm()
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Error occured in form submission', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
    );
  }


  return (
    <section id='contact' className='bg-white'>
      <div className='container mx-auto px-12 lg:px-32 py-32'>
        <p className='heading font-baskerville text-5xl text-black text-center mx-auto'>Contact</p>
        <p className='text-black text-center text-2xl lg:text-3xl font-nunito mt-10 mb-16'>Have a question or want to work together?</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form ref={form}>
              <div className='flex flex-col gap-y-12 xl:w-[80%] 2xl:w-[70%] mx-auto'>
                <div className='flex flex-col'>
                  <Field
                    name="uName"
                    placeholder="Name"
                    className={`py-6 px-7 rounded-xl bg-grey font-baskerville text-black focus:outline-none ${errors.uName ? "focus:border-pRed focus:ring-2 focus:ring-pRed text-pRed" : "border-blue focus:ring-2 focus:ring-blue"}`}
                  />
                  {errors.uName && touched.uName ? (
                    <div className='text-pRed font-baskerville font-bold text-sm mt-2'>{errors.uName}</div>
                  ) : null}
                </div>
                
                <div className='flex flex-col'>
                  <Field
                    name="uEmail"
                    type="email"
                    placeholder="Email"
                    className={`py-6 px-7 rounded-xl bg-grey font-baskerville text-black focus:outline-none ${errors.uEmail  ? "focus:border-pRed focus:ring-2 focus:ring-pRed text-pRed" : "focus:border-blue focus:ring-2 focus:ring-blue"}`}
                  />
                  {errors.uEmail && touched.uEmail ? (
                    <div className='text-pRed font-baskerville font-bold text-sm mt-2'>{errors.uEmail}</div>
                  ) : null}
                </div>
                
                <div className='flex flex-col'>
                  <Field
                    name="uMessage"
                    as="textarea"
                    rows="5"
                    placeholder="Message"
                    className={`py-6 px-7 rounded-xl bg-grey font-baskerville text-black focus:outline-none ${errors.uMessage ? "focus:border-pRed focus:ring-2 focus:ring-pRed text-pRed" : "focus:border-blue focus:ring-2 focus:ring-blue"}`}
                  />
                  {errors.uMessage && touched.uMessage ? (
                    <div className='text-pRed font-baskerville font-bold text-sm mt-2'>{errors.uMessage}</div>
                  ) : null}
                </div>
                
                <button type='submit' className='hover:scale-105 transition-scale duration-300 portfolioButton bg-blue rounded-3xl py-5 px-10 font-baskerville text-xl text-white mx-auto lg:mx-0 w-fit'>
                  Send Message
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Contact