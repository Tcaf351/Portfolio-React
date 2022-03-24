import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import About from './sections/About';


const Home = () => {
    return ( 
    <div>
        <Hero title="hero" />
           
            {/* <div className="py-32"></div> */}
                <div className='bg-gradient-to-tl from-slate-500 via-slate-600 to-slate-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -40 1440 250">
                        <path fill="#38BDF8" fill-opacity="1" d="M0,224L60,186.7C120,149,240,75,360,64C480,53,600,107,720,133.3C840,160,960,160,1080,144C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg></div>
                <div className='bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#38BDF8" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,144C480,160,600,224,720,261.3C840,299,960,309,1080,293.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div>

        <Projects title="projects" />

            {/* <div className="py-32"></div> */}
            <div className='bg-gradient-to-tl from-slate-500 via-slate-600 to-slate-800'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#38BDF8" fill-opacity="1" d="M0,0L34.3,5.3C68.6,11,137,21,206,69.3C274.3,117,343,203,411,234.7C480,267,549,245,617,213.3C685.7,181,754,139,823,128C891.4,117,960,139,1029,165.3C1097.1,192,1166,224,1234,224C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            </div>
        
        <Skills title="skills" />

            <div className="py-32"></div>

        <About title="about" />
    
    
        </div>
    );
}
 
export default Home;