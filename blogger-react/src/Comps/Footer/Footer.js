import LogoImage from './img/nav-logo.png'
import { SocialIcon } from 'react-social-icons';
import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
        <div className="logo-footer">
            <img src={LogoImage} />
        </div>
        <div className="social-icons">
            <SocialIcon url="facebook.com" />
            <SocialIcon url="twitter.com" />
            <SocialIcon url="youtube.com" />
            <SocialIcon url="gmail.com" />
        </div>
        <p>All Rights Reserved © Copyright 2022 The-Blog.com</p>
    </footer>
  )
}
