import React from 'react'
import Logo from '../assets/img/logo.png';
import Github from '../Icons/Github';
import Twitter from '../Icons/Twitter';
import Email from '../Icons/Envelope';


export default function footer(){
    return(

        <div  className="footer">
        <div className="footer-container">
        <small className="text-muted footer-copyright">Alex Trew;  TrewDev &copy; Version 1.0.4</small>
        <div className="footer-logo">
            <img src={Logo} alt="" className="footer-logo-image"/>
        </div>
        <div className="footer-contact">
           <a href="https://github.com/trew13690"  target='_blank'><Github className="footer-contact-item"/></a>
           <a href="https://twitter.com/trewred" target='_blank'>
            <Twitter className="footer-contact-item"/>
            </a>
        <a href='mailto: trew13690@gmail.com'>
            <Email className="footer-contact-item"/>
            </a>
        </div>
        </div>
        </div>
    )
}