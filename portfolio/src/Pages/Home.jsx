import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import About from './sections/About';

const Home = () => {
    return ( 
    <div>
        <Hero />
           
        <div className="py-32"></div>


        <Projects />


        <div className="py-32"></div>
        


        <Skills />


        <div className="py-32"></div>



        <About />
    
    
        </div>
    );
}
 
export default Home;