import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';



const Home = () => {
    return (
       <>
           <Hero hero="defaultHero">
               <Banner/>
           </Hero>
        <Services/>
       </>
            
       
    )
}
export default Home;

