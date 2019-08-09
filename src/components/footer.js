import React from 'react'
import Github from '../Icons/Github';
import Gitlab from '../Icons/Gitlab';
import Email from '../Icons/Envelope';


export default function footer(){
    return(

        <div  className="footer">
        <small className="text-muted footer-copyright">Alex Trew;  TrewDev &copy; Version 2.0.0; Not Mobile Responsive till 2.2.0</small>
        <div className="footer-contact">
           <a href="https://github.com/trew13690"  target='_blank'><Github className="footer-contact-item"/></a>
           <a href="https://gitlab.com/redtrew" target='_blank'>
            <Gitlab className="footer-contact-item"/>
            </a>
        <a href='mailto: trew13690@gmail.com'>
            <Email className="footer-contact-item"/>
            </a>
        </div>
        </div>
    )
}