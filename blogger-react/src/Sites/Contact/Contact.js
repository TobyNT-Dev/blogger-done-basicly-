import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <h1 className="contact-h">Contact</h1>
    <form className="form-con">
      <input required className="form-input" type="text" placeholder="Name" />
      <input required className="form-input" type="email" placeholder="E-mail" />
      <textarea required placeholder="Message" />
      <input type="submit" className="form-button" placeholder="Send" />
    </form>
    </>
  )
}
