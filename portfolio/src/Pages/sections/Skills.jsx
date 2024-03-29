// packages
import { motion } from 'framer-motion';

const Skills= () => {
    return ( 
        <div id="skills" className='min-h-screen xs:py-36 lg:py-40 lg:pb-20 bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-400 flex items-center justify-center relative text-gray-100'>
    
   

                <div className="absolute flex items-center justify-around z-10 opacity-60">
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 xs:-left-10 bg-cyan-300 rounded-full mix-blend-multiply filter blur-lg animate-blob"></div>
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 xs:-right-10 bg-[#5BFDB5] rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000"></div>
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 xs:-top-2 bg-sky-400 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000"></div>
                </div>
               

            {/* glass panel start */}
                <div className='bg-slate-500 rounded-xl lg:h-[80vh] xs:w-[90%] shadow-2xl shadow-cyan-400 z-20 bg-opacity-40 backdrop-blur-md grid xs:grid-cols-1 text-center lg:mt-8'>
                
                    <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="sm:container lg:grid lg:grid-cols-3 lg:items-center text-center">


                            <div className='lg:col-span-3 sm:px-4 xl:mb-8 xs:p-5 lg:pt-1 lg:pb-3'>
                                <p className='xs:text-xs md:text-md lg:text-lg 2xl:text-xl pt-5'>I have skills in JavaScript using the <span className="font-extrabold">"MERN"</span> stack which consists of</p>
                                    <div className="sm:py-2 lg:py-4 2xl:text-xl flex items-center flex-col justify-center">

                                        <div className='flex items-center justify-center'>
                                            <img className='xs:h-8 lg:h-12 sm:mx-1' src="./mongodbLogo.svg" alt="mongodb Logo" />
                                            <p className='text-slate-200 xs:text-xs md:text-md lg:text-lg 2xl:text-xl px-2'>MongoDB</p> 
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <img className='xs:h-8 lg:h-11 sm:pt-1 sm:mx-1' src="./expressJsLogo.png" alt="express Logo" />
                                            <p className='text-slate-200 xs:text-xs md:text-md lg:text-lg 2xl:text-xl px-2'>Express.js</p> 
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <img className='xs:h-8 lg:h-10 sm:mx-1' src="./reactLogo.png" alt="react Logo" />
                                            <p className='text-slate-200 xs:text-xs md:text-md lg:text-lg 2xl:text-xl px-2'>React.js</p> 
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <img className='xs:h-8 lg:h-10 sm:mx-1' src="./nodeJsLogo.png" alt="node Logo" />
                                            <p className='text-slate-200 xs:text-xs md:text-md lg:text-lg 2xl:text-xl px-2'>Node.js</p> 
                                        </div>
                                    </div>
                                <p className="xs:text-xs md:text-md lg:text-lg 2xl:text-xl xs:p-2 sm:p-0">I then use Tailwind CSS as my CSS framework of choice to truely bring out my creativity as a developer.</p>       
                                <p className="xs:text-xs md:text-md lg:text-lg 2xl:text-xl xs:py-2 md:py-0">Below is what I have experience using</p>
                            </div>



                            <div className="xs:my-5 sm:my-0 lg:pb-10">
                                <p className='sm:text-xl lg:text-2xl 2xl:text-3xl pb-3 font-extrabold'>Front End</p>
                                
                                <div className="xs:flex xs:items-center xs:justify-center pb-5">
                                    <img className='xs:h-8 lg:h-10 xs:mx-3 lg:mx-3' src="./html5Logo.svg" alt="html 5 Logo" />
                                    <img className='xs:h-8 lg:h-9 xs:mx-3 lg:mx-3' src="./javascriptLogo.png" alt="javascript Logo" />
                                    <img className='xs:h-9 lg:h-9 xs:mx-3 lg:mx-3' src="./typescriptLogo.svg" alt="typescript logo" /> 
                                </div>

                                <div className="xs:flex xs:items-center xs:justify-center">
                                    <img className='xs:h-8 lg:h-10 xs:mx-3 lg:mx-3' src="./reactLogo.png" alt="react Logo" />
                                    {/* <img className='xs:h-9 lg:h-10 xs:mx-3 lg:mx-3' src="./svelteLogo.png" alt="svelte.js logo" /> */}
                                </div>  
                            </div> 

                            <div className="xs:my-5 sm:my-0 lg:pb-10">
                                <p className='sm:text-xl lg:text-2xl 2xl:text-3xl py-3 font-extrabold'>Back End</p> 
                                
                                <div className="xs:flex xs:items-center xs:justify-center pb-3">
                                    <img className='xs:h-8 lg:h-11 xs:mx-2 sm:mx-1 lg:mx-3' src="./nodeJsLogo.png" alt="node.js logo" />
                                    <img className='xs:h-9 lg:h-12 xs:mx-2 sm:pt-1 lg:mx-3' src="./expressJsLogo.png" alt="express.js logo" />
                                    <img className='xs:h-9 lg:h-11 xs:mx-2 sm:pt-1 lg:mx-3' src="./nextLogo.svg" alt="next.js logo" />
                                    {/* <img className='xs:h-9 lg:h-12 xs:mx-2 sm:pt-1 lg:mx-3' src="./pythonLogo.svg" alt="python logo" /> */}
                                </div>

                                <div className="xs:flex xs:items-center xs:justify-center">
                                    <img className="xs:h-10 lg:h-14 xs:mx-2 lg:mx-1" src="./firebaseLogo.png" alt="google firebase logo" />
                                    <img className="xs:h-10 lg:h-14 xs:mx-2 lg:mx-1" src="./mongodbLogo.svg" alt="mongo db logo" />
                                    <img className="xs:h-10 lg:h-14 xs:mx-2 lg:mx-1" src="./dockerLogo.png" alt="docker logo" />
                                </div>

                            </div>  

                            <div className="xs:my-5 sm:my-0 sm:pb-10 lg:pb-10">
                                <p className='sm:text-xl lg:text-2xl 2xl:text-3xl py-3 font-extrabold'>CSS</p>
                            
                                <div className="xs:flex xs:items-center xs:justify-center pb-5">
                                    <img className='xs:h-9 lg:h-11 xs:mx-2 sm:mx-2 lg:mx-3' src="./Css3Logo.png" alt="css 3 logo" />
                                    <img className='xs:h-8 lg:h-9 xs:mx-2 sm:mx-1 lg:mx-3' src="./sassLogo.svg" alt="sass logo" />
                                </div>

                                <div className="xs:flex xs:items-center xs:justify-center">
                                    <img className='xs:h-4 lg:h-5 xs:mx-2 sm:mx-2 lg:mx-3' src="./TailwindLogo.svg" alt="tailwind css logo" />
                                </div>
                            </div>

                             

                            
                    </motion.div>


                

                </div>
            {/* glass panel end */}

            {/* top right corner of glass */}
            <motion.h1 
            whileHover={{ opacity:0.5 }}
            className='xs:text-5xl sm:text-7xl lg:text-9xl text-cyan-300 opacity-20 absolute xs:top-24 md:top-24 lg:top-20 xl:right-2 2xl:right-16 4xl:right-24 5xl:right-32 6xl:right-44 6xl:top-12 7xl:right-64 z-10'>Skills</motion.h1>
            {/* top right corner of glass */}

        </div>
     );
}
 
export default Skills;