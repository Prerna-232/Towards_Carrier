import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import axios from 'axios';

const Contact = () => {
  const [yourName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/Contact/add', { yourName, email, mobileNumber, message });
      console.log(response.data);
      alert('Thank you for your message!');
      setName('');
      setEmail('');
      setMobileNumber('');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert('Sorry, something went wrong. Please try again later.');
    }
  };




  return (
    <section >
      <div className='pt-2 text-center mb-1 ps-0 pb-0'>
        <img
          src='/Assets/Images/ContactPage/banner.jpg'
          alt='banner-img'
          className='mw-100'
        />
      </div>
      <section className=' p-1 text-center mb-2 ps-5 pe-5'>
        <section className='text-center'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Our Mission</h4>
              <p style={{ textAlign: "justify" }}>
                Our Mission is to provides a wide range of career related
                services including job search, job matching, information on Job
                Fairs, services of local service providers like drivers,
                plumbers, etc. or households and various other services. This
                portal facilitates registration of Job Seekers, Employers, Skill
                Providers, Local Service Providers (LSP’s), Career Centers,
                Placement Organisations, Households (availing services of LSP’s)
                and Government Departments.{" "}
              </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Get in Touch</h4>

              <table style={{ textAlign: "left" }}>
                <tbody>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-phone fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div>
                        +91-7030073595 <br /> +91- 9696689944
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-location-dot fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <p className='pt-2'>
                        G402, Ankit Gupta, Vasudha Vihar Apartment, Prayagraj, Pin-211012
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-envelope-open-text fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <a href='ankitguptamzp1@gmail.com'>
                        amitkumarherkar1998@gmail.com
                      </a>
                      <br />
                      <a href='ankitguptamzp2@gmail.com'>
                        {" "}
                        ankitguptamzp1@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Write to Us</h4>

              <form onSubmit={handleSubmit}>
                <div className='material-textfield mb-3'>
                  <input className='input form-control' placeholder=' ' type='text' value={yourName} onChange={handleNameChange} />                                  
                <label className='label'>Your Name</label>
                </div>

                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='email' value={email} onChange={handleEmailChange}
                  />
                  <label className='label'>Email Id</label>
                </div>

                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='text' value={mobileNumber} onChange={handleMobileNumberChange}
                  />
                  <label className='label'>Mobile Number</label>
                </div>

                <div className='material-textfield mb-3 '>
                  <textarea
                    className='input form-control'
                    placeholder=' '
                    type='text' value={message} onChange={handleMessageChange}
                    rows='3'
                  ></textarea>
                  <label className='label'>Your Message</label>
                </div>
                <div className='d-grid gap-3'>
                  <button
                    className='btn btn-success rounded-pill'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <img
                src='./Assets/Images/ContactPage/write.jpg'
                height='340px'
                alt=''
                className=' '
              />
            </div>
          </div>
        </section>
      </section>

      <div className='pb-2'>
        <iframe
          title='Location'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3709300340092!2d81.779978515091!3d25.42585962862455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534a978361b3d%3A0xe885251eeaec977!2sVasudha%20Vihar%20Complex%20Regd.!5e0!3m2!1sen!2sin!4v1678260237518!5m2!1sen!2sin"
          
          width='100%'
          height='350'
          style={{ border: "0" }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </section>
  );

}
  export default Contact;
