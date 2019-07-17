import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';


export default function footer(){
    return(
        <div  className="footer">
        <BottomNavigation>
        <small className="text-muted footer-copyright">Alex Trew;  TrewDev &copy; </small>
        <div className="footer-logo">
            <img src="#" alt="" className="footer-logo-image"/>
        </div>
        <div className="footer-contact">
            
        </div>
        </BottomNavigation>
    </div>
    )
}