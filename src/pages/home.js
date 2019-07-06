import React from 'react';
import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer'
import Projects from '../components/projects'

function Home(){

    return (
       <div id='nav'>
           <Nav />
           <Header />
           <Projects/>
           <Footer />
       </div>
    )
}

export default Home;