// packages
import { motion } from 'framer-motion';

const Projects = () => {
    const mobile = 1350;

    return (
        // Projects section start
        <div 
        id="projects" className='min-h-screen sm:py-40 lg:py-40 bg-gradient-to-tl from-slate-500 via-slate-600 to-slate-700 text-gray-900 flex items-center justify-center relative sm:pt-10'>
    
            {/* Glass Section Start */}
            <div className='bg-[#52ACE3] rounded-xl xs:h-[80vh] lg:h-[75vh]  xs:w-9/12 shadow-2xl shadow-blue-300 z-20 bg-opacity-60 backdrop-blur-lg text-gray-100 relative xs:flex xs:items-center xs:justify-center xs:overflow-x-scroll'>

                {/* content start */}
                <motion.div 
                initial={{ x: 250 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                drag="x"  
                dragConstraints={{ right: 0, left: -1100 }}
                className="lg:h-full w-full xs:flex xs:justify-start xs:flex-row xs:items-center xs:container text-center">


                {/* project 0 start */}
                <div className='xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max lg:mx-5'>
                    <div className='xs:my-5 sm:my-0 md:mx-3 '>
                        <a href="http://www.timcafarella.com" target="_blank" rel='noreferrer'>
                            <motion.img 
                            whileHover={{ scale: 1.1 }}
                            className='rounded-lg xs:h-32 lg:h-56 hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5' 
                            src="/Portfolio.png" 
                            alt="my portfolio" />
                        </a>
                    </div>
                        <div className='xs:flex xs:items-center xs:justify-center xs:flex-col'>
                            <img className='xs:h-6 sm:h-8 lg:h-10 lg:my-1 ' src="/reactLogo.png" alt="react Logo" />
                            <img className='xs:h-3 sm:h-4 lg:h-6 my-1 lg:my-1' src="/TailwindLogo.svg" alt="tailwind css logo" />
                        </div>
                </div>
                {/* project 0 end */}

                {/* project 1 start */}
                <div className='xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max xs:mx-5'>
                    <div className='xs:my-5 sm:my-0 md:mx-3'>
                        <a href="https://pokemon-api-wheat.vercel.app/" target="_blank" rel='noreferrer'>
                            <motion.img 
                            whileHover={{ scale: 1.1 }}
                            className='rounded-lg xs:h-32 lg:h-56 hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5' 
                            src="/pokemonApi.png" 
                            alt="pokemon app" />
                        </a>
                    </div>
                        <div className='xs:flex xs:items-center xs:justify-center xs:flex-col'>
                            <img className='xs:h-6 sm:h-8 lg:h-10 lg:my-1 ' src="/reactLogo.png" alt="react Logo" />

                            <img className='xs:h-3 sm:h-4 lg:h-6 my-1 lg:my-1' src="/TailwindLogo.svg" alt="tailwind css logo" />
                        </div>
                </div>
                {/* project 1 end */}

                {/* project 2 start */}
                    <div className="xs:w-full xs:flex xs:items-center xs:justify-evenly xs:my-10 sm:my-12 md:justify-center lg:my-8 xs:flex-col  min-w-max">
                        <div className='xs:my-5 sm:my-0 md:mx-3'>
                            <a href="https://weather-app-pi-eight-79.vercel.app/" target="_blank" rel="noreferrer">

                                <motion.img className="xs:h-32 lg:h-56 w-auto rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5" 
                                        whileHover={{ scale: 1.1 }}
                                        src="/weatherApp.png" 
                                        alt="weather app" /></a>
                        </div>
                        <div className="md:mx-3 lg:pt-2">
                            <img className='xs:h-5 sm:h-8 lg:h-10 rounded-lg' src="/javascriptLogo.png" alt="javascript logo" />
                        </div>
                    </div>
                {/* project 2 end */}


                {/* project 3 start */}
                    <div className="xs:w-full xs:my-2 xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max">
                        <div className='xs:my-5 xs:px-4'>
                            <a href="https://github.com/Tcaf351/starWarsWiki" target="_blank" rel="noreferrer">
                                <motion.img 
                                    className="xs:h-28 lg:h-56 w-auto mx-1 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300" 
                                    whileHover={{ scale: 1.1 }}
                                    src="/starWarsWiki.png" 
                                    alt="star wars wiki app" /></a>
                        </div>


                        <div className="xs:w-full sm:w-1/2 xs:flex xs:flex-col xs:justify-evenly xs:items-center">
                            <div className='sm:w-1/2 xs:flex xs:items-center xs:justify-around'>
                                <img className='xs:h-6 sm:h-8 lg:h-10 lg:mx-1' src="/reactLogo.png" alt="react Logo" />
                         
                                <img className='xs:h-8 lg:h-12 lg:mx-1' src="/expressJsLogo.png" alt="express.js logo" />
                            </div>

                            <div className='xs:w-full xs:flex xs:items-center xs:justify-center'>   
                                <img className='xs:h-7 sm:h-9 lg:h-11 lg:mx-1 xs:px-3 lg:px-8' src="/nodeJsLogo.png" alt="node.js logo" />
                                
                                <img className="xs:h-9 sm:h-10 lg:h-12 lg:mx-1 xs:px-3 lg:px-8" src="/firebaseLogo.png" alt="google firebase logo" />

                            </div> 
                            <div className='xs:w-full xs:flex xs:items-center xs:justify-evenly'>
                                <img className='xs:h-3 sm:h-4 lg:h-6 lg:mx-1' src="/TailwindLogo.svg" alt="tailwind css logo" />

                            </div>
                        </div>

                    </div>
                {/* project 3 end */}


                {/* project 4 start */}
                    <div className="xs:w-full xs:my-20 sm:my-10 xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max">
                        <div className='md:mx-3'>
                            <a href="https://crypto-api-mocha.vercel.app/" target="_blank" rel="noreferrer">
                                <motion.img 
                                className="xs:h-32 lg:h-64 w-auto mx-1 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5" 
                                whileHover={{ scale: 1.1 }}
                                src="/cryptoApi.png" 
                                alt="crypto tracker api" /></a>
                        </div>
                        <div className="xs:flex xs:flex-col xs:justify-center xs:items-center md:mx-3 lg:pt-2">
                            <img className='xs:h-6 sm:h-8 lg:h-10 lg:my-1' src="/reactLogo.png" alt="react Logo" />
                            <img className='xs:h-3 sm:h-4 lg:h-6 my-1 lg:my-1' src="/TailwindLogo.svg" alt="tailwind css logo" />
                        </div>
                    </div>
                {/* project 4 end */}
                </motion.div>
                {/* content end */} 

            </div>
            {/* Glass Section End */}

            

                {/* top left corner of glass */}
                <motion.h1
                    whileHover={{ opacity:0.5 }}

                className='xs:text-5xl sm:text-7xl lg:text-9xl text-cyan-300 opacity-20 absolute xs:top-10 sm:-top-10 lg:top-6 xl:left-2 2xl:left-14 4xl:left-20 5xl:left-28 6xl:left-40 6xl:top-10 7xl:left-56 z-10'>Projects</motion.h1>
                {/* top left corner of glass */}

                {/* circle top right side start */}
                <div className='bg-[#5BFDB5] h-60 w-60 rounded-full absolute xs:right-8 md:right-16 lg:right-20 xl:right-24 2xl:right-40 4xl:right-48 6xl:right-64 7xl:right-80 sm:top-44 z-10'></div>
                {/* circle top right side end */}

                {/* circle top right side start */}
                <div className='bg-[#5B95FD] h-40 w-40 rounded-full absolute xs:left-4 md:left-12 lg:left-20 xl:left-28 2xl:left-44 4xl:left-56 6xl:left-72 7xl:left-96 bottom-56 z-10'></div>
                {/* circle top right side end */}

        </div>
        // Projects section end
     );
}
 
export default Projects;