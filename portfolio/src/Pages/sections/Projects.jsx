// packages
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        // Projects section start
        <div 
        id="projects" className='min-h-screen bg-gradient-to-tl from-slate-500 via-slate-600 to-slate-800 text-gray-900 flex items-center justify-center relative sm:pt-10'>
    
            {/* Glass Section Start */}
            <div 
            
            className='bg-[#52ACE3] rounded-xl sm:h-[80vh] lg:h-[75vh] w-9/12 shadow-2xl shadow-blue-300 z-20 bg-opacity-60 backdrop-blur-lg text-gray-100 relative sm:flex sm:items-center sm:justify-center '>

                    {/* content start */}
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-h-full sm:flex sm:justify-center sm:flex-col sm:items-center sm:container lg:grid lg:grid-cols-3 lg:items-start text-center">

                    <div className="sm:flex sm:items-center sm:justify-center sm:my-2 xl:my-0 lg:flex lg:items-center lg:flex-col lg:justify-center">
                        <a href="https://weather-app-pi-eight-79.vercel.app/" target="_blank" rel="noreferrer">
                            <motion.img className="sm:h-28 lg:h-40 w-auto mx-1 rounded-lg xl:mt-5 hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300" 
                                        whileHover={{ scale: 1.1 }}
                                        src="/weatherApp.png" 
                                        alt="weather app" /></a>
                        <div className="pt-2">
                            <p class="px-5">Vanilla.JS</p>
                        </div>
                    </div>
                    <div className="sm:my-2 sm:flex sm:items-center sm:justify-center lg:flex lg:items-center lg:flex-col lg:justify-center">
                        <a href="https://github.com/Tcaf351/starWarsWiki" target="_blank" rel="noreferrer">
                            <motion.img 
                                className="sm:h-28 lg:h-40 w-auto mx-1 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300" 
                                whileHover={{ scale: 1.1 }}
                                src="/starWarsWiki.png" 
                                alt="star wars wiki app" /></a>
                        <div className="pt-2">
                            <p class="px-5">React.JS</p>
                            <p class="px-5">Express.JS</p>
                            <p class="px-5">Node.JS</p>
                            <p class="px-5">Firebase</p>
                            <p class="px-5">Tailwind CSS</p>
                        </div>
                    </div>
                    <div className="sm:my-2 sm:flex sm:items-center sm:justify-center lg:flex lg:items-center lg:flex-col lg:justify-center">
                        <a href="https://crypto-api-mocha.vercel.app/" target="_blank" rel="noreferrer">
                            <motion.img 
                                className="sm:h-32 lg:h-52 w-auto mx-1 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300" 
                                whileHover={{ scale: 1.1 }}
                                src="/cryptoApi.png" 
                                alt="" /></a>
                        <div className="pt-2">
                            <p class="px-5">React.JS</p>
                            <p class="px-5">Tailwind CSS</p>
                        </div>
                    </div>

                </motion.div>
                {/* content end */}

            </div>
            {/* Glass Section End */}

            

                {/* top left corner of glass */}
                <motion.h1
                    whileHover={{ opacity:0 }}

                className='sm:text-7xl lg:text-9xl text-cyan-300 opacity-20 absolute sm:top-3 lg:-top-2 xl:left-2 2xl:left-14 4xl:left-20 5xl:left-28 6xl:left-40 6xl:top-10 7xl:left-56 z-10'>Projects</motion.h1>
                {/* top left corner of glass */}

                {/* circle top right side start */}
                <div className='bg-[#5BFDB5] h-60 w-60 rounded-full absolute sm:right-8 md:right-16 lg:right-20 xl:right-24 2xl:right-40 4xl:right-48 6xl:right-64 7xl:right-80 sm:top-44 z-10'></div>
                {/* circle top right side end */}

                {/* circle top right side start */}
                <div className='bg-[#5B95FD] h-40 w-40 rounded-full absolute sm:left-4 md:left-12 lg:left-20 xl:left-28 2xl:left-44 4xl:left-56 6xl:left-72 7xl:left-96 bottom-56 z-10'></div>
                {/* circle top right side end */}

        </div>
        // Projects section end

     );
}
 
export default Projects;