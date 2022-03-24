// packages
import { Link } from 'react-scroll'


const Navbar = () => {
    return ( 
        <nav className="bg-slate-800 flex items-center justify-between py-5">
            
            <div className='w-1/4 flex items-center justify-center'>
                <div className='relative group'>
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-[#5BFDB5] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                        <button className='relative text-gray-100 px-7 py-4 bg-black rounded-lg leading-none flex items-center'>Resume</button>
                </div>
            </div>

            <ul className="text-white mx-20 text-center flex items-center justify-between">
                <Link to="projects"     
                        smooth={true}
                        activeClass="active"
                        ><li className="px-5 py-1 hover:text-sky-300 duration-300">Projects</li></Link>
                <Link to="skills" 
                        smooth={true}
                        activeClass="active"
                        ><li className="px-5 py-1 hover:text-sky-300 duration-300">Skills</li></Link>
                <Link to="about" 
                        activeClass="active"
                        smooth={true}
                        duration={1000}
                ><li className="px-5 py-1 hover:text-sky-300 duration-300">About</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;