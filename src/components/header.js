import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Header(){

    return (
        <div>
            <Typography variant="h2"  style={{marginTop: '6rem', marginLeft: '2rem', marginRight: '2rem'}}>
                Full Stack Developer! 
            </Typography>
            <Typography variant="h3" style={{marginTop: '2rem',marginLeft: '33%'}}>
            Building Solutions to Real Problems!
            </Typography>
            <Typography variant="h5" style={{marginTop: '.5rem',marginLeft: '55%'}}>
            Based In Seattle, WA
            </Typography>
            <img src="../src/assets/PersonalPhoto.jpg" style={{marginLeft: '2rem',marginTop: '1.5rem', height: '480px', width: '270', borderRadius: '15%'}}/>
        </div>
    )


}