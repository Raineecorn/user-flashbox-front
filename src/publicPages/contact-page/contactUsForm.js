import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
    date_of_pickup: '',
    contact_number: '',
    contact_person: '',
    location: '',
    number_of_boxes: '',
    box_sizes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_63r6x79',  // Replace with your EmailJS service ID
      'template_6u4xt1x', // Replace with your EmailJS template ID
      formData,
      'cyAEDD5Y7YMvdjVZP' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your email has been sent!');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send the email. Please try again later.');
    });
  };

  return (
    <form id="form" onSubmit={handleSubmit} className="container m-5">
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="from_name" className="form-label text-white">Your Name</label>
          <input type="text" name="from_name" id="from_name" value={formData.from_name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="to_name" className="form-label text-white">Recipient&#39;s Name</label>
          <input type="text" name="to_name" id="to_name" value={formData.to_name} onChange={handleChange} className="form-control" required />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="message" className="form-label text-white">Message</label>
          <input type="text" name="message" id="message" value={formData.message} onChange={handleChange} className="form-control" required />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="reply_to" className="form-label text-white">Your Email</label>
          <input type="email" name="reply_to" id="reply_to" value={formData.reply_to} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="date_of_pickup" className="form-label text-white">Date of Pick Up</label>
          <input type="date" name="date_of_pickup" id="date_of_pickup" value={formData.date_of_pickup} onChange={handleChange} className="form-control" required />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="contact_number" className="form-label text-white">Contact Number</label>
          <input type="tel" name="contact_number" id="contact_number" value={formData.contact_number} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="contact_person" className="form-label text-white">Contact Person</label>
          <input type="text" name="contact_person" id="contact_person" value={formData.contact_person} onChange={handleChange} className="form-control" required />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="location" className="form-label text-white">Location</label>
          <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="number_of_boxes" className="form-label text-white">How Many Boxes?</label>
          <input type="number" name="number_of_boxes" id="number_of_boxes" value={formData.number_of_boxes} onChange={handleChange} className="form-control" required />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="box_sizes" className="form-label text-white">What Sizes of Boxes?</label>
          <input type="text" name="box_sizes" id="box_sizes" value={formData.box_sizes} onChange={handleChange} className="form-control" required />
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">Send Email</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
