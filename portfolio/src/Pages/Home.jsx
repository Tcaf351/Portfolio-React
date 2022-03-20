import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import About from './sections/About';


const Home = () => {
    return ( 
    <div>
        <Hero title="hero" />
           
        <div className="py-32"></div>


        <Projects title="projects" />


        <div className="py-32"></div>
        


        <Skills title="skills" />


        <div className="py-32"></div>



        <About title="about" />
    
    
        </div>
    );
}
 
export default Home;