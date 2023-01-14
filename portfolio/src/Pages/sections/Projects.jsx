// packages
import { motion } from 'framer-motion';

const Projects = () => {

    return (
        // Projects section start
        <div id="projects" className='min-h-screen xs:py-36 lg:py-40 bg-slate-800 text-gray-900 flex items-center justify-center relative sm:pt-10'>
    
            {/* Glass Section Start */}
            <div className='bg-[#52ACE3] rounded-xl xs:max-h-full xs:w-[90%] xl:h-[80vh] shadow-2xl shadow-blue-300 z-20 bg-opacity-60 backdrop-blur-lg text-gray-100 relative xs:flex xs:items-center xs:justify-center'>

            {/* content start */}
            <div className="xs:max-h-full xs:w-[90%] lg:h-full lg:w-full sm:grid xs:gap-6 lg:gap-4 grid-rows-2 xs:grid-cols-2 lg:grid-cols-3 text-center">


                {/* project 0 start */}
                <div className='xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max xs:mx-2'>
                    <div className='xs:my-5 sm:my-4 lg:my-0 md:mx-3'>
                        <a href="https://pokemon-api-wheat.vercel.app/" target="_blank" rel='noreferrer'>
                            <motion.img 
                            whileHover={{ scale: 1.1 }}
                            className='rounded-lg xs:h-32 lg:h-36 xl:h-52 4xl:h-80 hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5' 
                            src="/pokemonApi.png" 
                            alt="pokemon app" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Tcaf351/pokemon-Api" 
                            className="xs:mt-2 lg:mt-8 py-1 px-4 rounded-lg shadow-xl text-gray-100 bg-cyan-500 ease-out duration-300 hover:bg-blue-500"
                            target="_blank" 
                            rel='noreferrer'>Github</a>
                    </div>
                        {/* <div className='xs:flex xs:items-center xs:justify-center xs:flex-col'>
                            <img className='xs:h-6 sm:h-8 lg:h-10 lg:my-1 ' src="/reactLogo.png" alt="react Logo" />

                            <img className='xs:h-3 sm:h-4 lg:h-6 my-1 lg:my-1' src="/TailwindLogo.svg" alt="tailwind css logo" />
                        </div> */}
                </div>
                {/* project 0 end */}

                {/* project 1 start */}
                <div className='xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max xs:mx-2'>
                    <div className='xs:my-5 sm:my-4 lg:my-0 md:mx-3'>
                        <a href="https://next-js-weather-app-wine.vercel.app/" target="_blank" rel='noreferrer'>
                            <motion.img 
                            whileHover={{ scale: 1.1 }}
                            className='rounded-lg xs:h-32 lg:h-36 xl:h-52 4xl:h-80 hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5' 
                            src="/weatherAppNext.png" 
                            alt="next.js weather app" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Tcaf351/Next.js-Assignment" 
                            className="mt-8 py-1 px-4 rounded-lg shadow-xl text-gray-100 bg-cyan-500 ease-out duration-300 hover:bg-blue-500"
                            target="_blank" 
                            rel='noreferrer'>Github</a>
                    </div>
                        {/* <div className='xs:flex xs:items-center xs:justify-center xs:flex-col'>
                            <img className='xs:h-6 sm:h-8 lg:h-10 lg:my-1 ' src="/nextLogo.svg" alt="react Logo" />

                            <img className='xs:h-3 sm:h-4 lg:h-6 my-1 lg:my-1' src="/TailwindLogo.svg" alt="tailwind css logo" />
                        </div> */}
                </div>
                {/* project 1 end */}

                {/* project 2 start */}
                <div className='xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max lg:mx-2'>
                    <div className='xs:my-5 sm:my-4 lg:my-0 md:mx-3 '>
                        <a href="http://www.timcafarella.com" target="_blank" rel='noreferrer'>
                            <motion.img 
                            whileHover={{ scale: 1.1 }}
                            className='rounded-lg xs:h-32 lg:h-36 xl:h-52 4xl:h-80 hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5' 
                            src="/Portfolio.png" 
                            alt="my portfolio" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Tcaf351/Portfolio-React"
                            className="mt-8 py-1 px-4 rounded-lg shadow-xl text-gray-100 bg-cyan-500 ease-out duration-300 hover:bg-blue-500"
                            target="_blank" 
                            rel='noreferrer'>Github</a>
                    </div>
                        {/* <div className='xs:flex xs:items-center xs:justify-center xs:flex-col'>
                            <img className='xs:h-6 sm:h-8 lg:h-10 lg:my-1 ' src="/reactLogo.png" alt="react Logo" />
                            <img className='xs:h-3 sm:h-4 lg:h-6 my-1 lg:my-1' src="/TailwindLogo.svg" alt="tailwind css logo" />
                        </div> */}
                </div>
                {/* project 2 end */}

                {/* project 3 start */}
                    <div className="xs:w-full xs:flex xs:items-center xs:justify-center xs:my-10 sm:my-12 md:justify-center lg:my-8 xs:flex-col min-w-max">
                        <div className='xs:my-5 sm:my-4 lg:my-0 md:mx-3'>
                            <a href="https://weather-app-pi-eight-79.vercel.app/" target="_blank" rel="noreferrer">
                                <motion.img className="xs:h-32 lg:h-36 xl:h-52 4xl:h-80 w-auto rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5" 
                                        whileHover={{ scale: 1.1 }}
                                        src="/weatherApp.png" 
                                        alt="weather app" /></a>
                        </div>

                        <div>
                            <a href="https://github.com/Tcaf351/Weather-App"
                                className="mt-8 py-1 px-4 rounded-lg shadow-xl text-gray-100 bg-cyan-500 ease-out duration-300 hover:bg-blue-500"
                                target="_blank" 
                                rel='noreferrer'>Github</a>
                        </div>
                        {/* <div className="md:mx-3 lg:pt-2">
                            <img className='xs:h-5 sm:h-8 lg:h-10 rounded-lg' src="/javascriptLogo.png" alt="javascript logo" />
                        </div> */}
                    </div>
                {/* project 3 end */}

                {/* project 4 start */}
                    <div className="xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max xs:mx-2">
                        <div className='xs:my-5 sm:my-4 lg:my-0  md:mx-3'> 
                            <a href="https://github.com/Tcaf351/starWarsWiki" target="_blank" rel="noreferrer">
                                <motion.img 
                                    className="xs:h-32 lg:h-36 xl:h-52 4xl:h-80 w-auto mx-1 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5"  
                                    whileHover={{ scale: 1.1 }}
                                    src="/starWarsWiki.png" 
                                    alt="star wars wiki app" /></a>
                        </div>

                        <div>
                            <a href="https://github.com/Tcaf351/starWarsWiki"
                                className="mt-8 py-1 px-4 rounded-lg shadow-xl text-gray-100 bg-cyan-500 ease-out duration-300 hover:bg-blue-500"
                                target="_blank" 
                                rel='noreferrer'>Github</a>
                        </div>

                        {/* <div className="xs:w-full sm:w-1/2 xs:flex xs:flex-col xs:justify-evenly xs:items-center">
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
                        </div> */}

                    </div>
                {/* project 4 end */}


                {/* project 5 start */}
                    <div className="xs:w-full xs:my-20 sm:my-10 xs:flex xs:items-center xs:justify-center xs:flex-col min-w-max">
                        <div className='xs:my-5 sm:my-4 lg:my-0 md:mx-3'>
                            <a href="https://crypto-api-mocha.vercel.app/" target="_blank" rel="noreferrer">
                                <motion.img 
                                className="xs:h-32 lg:h-36 xl:h-52 4xl:h-80 w-auto mx-1 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition ease-out duration-300 lg:mb-5" 
                                whileHover={{ scale: 1.1 }}
                                src="/cryptoApi.png" 
                                alt="crypto tracker api" /></a>
                        </div>
                        <div>
                            <a href="https://github.com/Tcaf351/crypto-api"
                                className="mt-8 py-1 px-4 rounded-lg shadow-xl text-gray-100 bg-cyan-500 ease-out duration-300 hover:bg-blue-500"
                                target="_blank" 
                                rel='noreferrer'>Github</a>
                        </div>
                        {/* <div className="xs:flex xs:flex-col xs:justify-center xs:items-center md:mx-3 lg:pt-2">
                            <img className='xs:h-6 sm:h-8 lg:h-10 lg:my-1' src="/reactLogo.png" alt="react Logo" />
                            <img className='xs:h-3 sm:h-4 lg:h-6 my-1 lg:my-1' src="/TailwindLogo.svg" alt="tailwind css logo" />
                        </div> */}
                    </div>
                {/* project 5 end */}
            </div>
            {/* content end */} 

            </div>
            {/* Glass Section End */}

            

                {/* top left corner of glass */}
                <motion.h1
                    whileHover={{ opacity:0.5 }}

                className='xs:text-5xl sm:text-7xl lg:text-9xl text-cyan-300 opacity-20 absolute xs:top-20 sm:-top-10 lg:top-6 xl:left-2 2xl:left-14 4xl:left-20 5xl:left-28 6xl:left-40 6xl:top-10 7xl:left-56 z-10'>Projects</motion.h1>
                {/* top left corner of glass */}

                {/* circle top right side start */}
                <div className='bg-[#5BFDB5] h-60 w-60 rounded-full absolute xs:right-6 md:right-20 lg:right-24 xl:right-4 2xl:right-2 4xl:right-4 6xl:right-12 7xl:right-14 xs:top-44 z-10'></div>
                {/* circle top right side end */}

                {/* circle top right side start */}
                <div className='bg-[#5B95FD] h-40 w-40 rounded-full absolute xs:left-4 md:left-12 lg:left-32 xl:left-2 2xl:left-2 4xl:left-4 6xl:left-12 7xl:left-14 xs:bottom-32 md:bottom-56 z-10'></div>
                {/* circle top right side end */}

        </div>
        // Projects section end
     );
}
 
export default Projects;