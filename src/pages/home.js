import React from 'react';

import Intro from '../components/intro';
import Footer from '../components/footer'
import Projects from '../components/projects'
import Skills from '../components/skills'
function Home(){

    return (
       <div >
           <Intro />
           <Skills />
           <Projects />
           <Footer />
       </div>
    )
}

export default Home;