// packages
import { Link } from 'react-scroll'


const Navbar = () => {
    return ( 
        <nav className="bg-slate-800 flex items-center justify-between py-5">
            <h1 className="text-sky-400 text-2xl ml-28 ease-in-out duration-500 hover:text-3xl hover:text-cyan-300">Timothy Cafarella</h1>
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