import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Header(){

    return (
        <div>
            <Typography variant="h2" style={{marginTop: '6rem'}}> 
                Full Stack Developer! 
            </Typography>
            <Typography variant="h3" >
            Building Solutions to Real Problems!
            </Typography>
            <Typography variant="h5" >
            Based In Seattle, WA
            </Typography>
            <img src="../src/assets/PersonalPhoto.jpg" style={{marginLeft: '2rem',marginTop: '1.5rem', height: '480px', width: '270', borderRadius: '15%'}}/>
        </div>
    )


}