// packages
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';


const Navbar = () => {

    return ( 
        <nav className="bg-slate-800 flex items-center justify-between py-5">
            
            <div className='w-1/4 flex items-center justify-center xs:pl-24 sm:pl-0'>
                <div className='relative group'>
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-[#5BFDB5] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                        <a
                        href='resume.pdf'
                        target="_blank"
                        download
                        className='relative text-gray-100 px-7 py-4 bg-black rounded-lg leading-none flex items-center'>Resume</a>
                </div>
            </div>

            <ul className="text-white mx-20 text-center flex items-center justify-between xs:flex-col sm:flex-row">
                <Link to="projects"     
                        smooth={true}
                        offset={30}
                        activeClass="active"
                        ><motion.li 
                        whileHover={{ scale:1.3 }}
                        className="px-5 py-1 cursor-pointer hover:underline hover:decoration-cyan-300 hover:text-sky-300">Projects</motion.li></Link>
                <Link to="skills" 
                        smooth={true}
                        offset={88}
                        duration={1000}
                        activeClass="active"
                        ><motion.li 
                        whileHover={{ scale:1.3 }}
                        className="px-5 py-1 cursor-pointer hover:underline hover:decoration-cyan-300 hover:text-sky-300">Skills</motion.li></Link>
                <Link to="about" 
                        activeClass="active"
                        smooth={true}
                        offset={88}
                        duration={1000}
                        ><motion.li 
                        whileHover={{ scale:1.3 }}
                        className="px-5 py-1 cursor-pointer hover:underline hover:decoration-cyan-300 hover:text-sky-300">About</motion.li></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;