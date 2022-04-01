import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import About from './sections/About';


const Home = () => {

    return ( 
    <div>
        <Hero title="hero" />
    
        <Projects title="projects" />

        <Skills title="skills" />

        <About title="about" />
    
    
        </div>
    );
}
 
export default Home;