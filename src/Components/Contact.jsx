import React from 'react';
import '../styles/contact.css'
const Contact = () => {
  return (
    <div>
      <div className="cont">
        <div className="inputs">
          <h6 className='message'>Leave Us A Message</h6><br />
          <label htmlFor="">Name*</label>
          <input type="text" className='contact' required />
          <input type="text" className='contactt' required />
          <label htmlFor="">Email*</label>
          <input type="email" className='contacts' required />
          <label htmlFor="">Comment or Message</label>
          <textarea type="text" className='area'></textarea>
          <input type="submit" value="SUBMIT" id="sub" />
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
    </div>
  )
}

export default Contact
