import React from 'react';
import '../styles/contact.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { data } from 'react-router-dom';
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { names, email, subject, message } = data;
    const formData = new FormData();
    try{
      formData.append('names', names);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);
      const result = axios.post('https://botiga-kvf9.onrender.com/contact/createContact', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )
    }
    catch(error){
      console(error)
    }
  }
  return (
      <div className="cont">
        <div className="inputs">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <h6 className='message'>Leave Us A Message</h6><br />
            <input 
            {...register("names", { required: true})}
            type="text" 
            className='contact' 
            placeholder="First name"
            />
            {/* <input 
            {...register("names", { required: true})}
            type="text" 
            className='contactt' 
            placeholder="Last name"
            /> */}
            <input 
            {...register("email", { required: true})}
            type="email" 
            className='contacts' 
            placeholder="Email*"
            />
            <input 
            {...register("subject", { required: true})}
            type="text" 
            className='contacts' 
            placeholder="Subject*"
            />
            <textarea 
            {...register("message", { required: true})}
            type="text" 
            className='area' placeholder='Comment or Message'></textarea>
            <button type="submit" id="sub" >SEND</button>
          </form>
        </div>
        <div className="storess">
          <h6 className='message'>Our Store</h6>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>

          <p><strong>PHONE:</strong> <br />+1 212 244 2681</p><br />
          <p className='down'><strong>E-MAIL:</strong><br /> office@example.org</p>

          <h6 className='message'>Store Hours</h6><br />
          <p className='down'>Sun: Closed</p><br />
          <p>Mon to Sat: 10 AM – 5:30 PM</p>
        </div>
      </div>
  )
}

export default Contact
