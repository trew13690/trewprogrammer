import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';


export default function footer(){
    return(
        <div >
        <BottomNavigation style={{marginTop: '5rem'}}>
        <small className="text-muted">Alex Trew;  TrewDev &copy; </small>
        {/* <small ><em >Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></em></small> */}
        </BottomNavigation>
    </div>
    )
}