// packages
import { motion } from 'framer-motion';

const Skills= () => {
    return ( 
        <div id="skills" className='min-h-screen bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-500 flex items-center justify-center relative text-gray-100'>
    
   

                <div className="absolute flex items-center justify-around z-10 opacity-60">
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 sm:-left-10 bg-cyan-300 rounded-full mix-blend-multiply filter blur-lg animate-blob"></div>
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 sm:-right-10 bg-[#5BFDB5] rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000"></div>
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 sm:-top-2 bg-sky-400 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000"></div>
                </div>
               

            {/* glass panel start */}
                <div
                
                className='bg-slate-500 rounded-xl lg:h-[75vh] w-9/12 shadow-2xl shadow-cyan-400 z-20 bg-opacity-40 backdrop-blur-md grid sm:grid-cols-1 grid-cols-3 text-center lg:mt-8'>
                
                    <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="sm:container lg:grid lg:grid-cols-3 lg:items-center text-center">


                            <div className='lg:col-span-3 sm:px-4 xl:mb-10'>
                                <p className='text-md 2xl:text-xl py-2'>I have skills in Javascript using the <span className="font-extrabold">"FERN"</span> stack which consists of</p>
                                    <div className="sm:py-2 lg:py-4 2xl:text-xl flex items-center flex-col justify-center">

                                        <div className='flex items-center justify-center'>
                                            <img className='sm:h-8 lg:h-10 lg:mx-1' src="./firebaseLogo.png" alt="firebase Logo" />
                                            <p className='text-slate-200'>Firebase</p> 
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <img className='sm:h-8 lg:h-10 sm:pt-1 lg:mx-1' src="./expressJsLogo.png" alt="express Logo" />
                                            <p className='text-slate-200'>Express.js</p> 
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <img className='sm:h-8 lg:h-10 lg:mx-1' src="./reactLogo.png" alt="react Logo" />
                                            <p className='text-slate-200'>React.js</p> 
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <img className='sm:h-8 lg:h-10 lg:mx-1' src="./nodeJsLogo.png" alt="node Logo" />
                                            <p className='text-slate-200'>Node.js</p> 
                                        </div>
                                    </div>
                                <p className="text-md 2xl:text-xl">I then use Tailwind CSS as my CSS framework of choice to truely bring out my creativity as a developer.</p>       
                                <p className="text-md 2xl:text-xl sm:py-5">Below is what I have experience using</p>
                            </div>



                            <div className="my-5">
                                <p className='sm:text-xl 2xl:text-3xl py-3 font-extrabold'>Front End</p>
                                
                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <img className='sm:h-8 lg:h-10 lg:mx-1' src="./reactLogo.png" alt="react Logo" />
                                    <img className='sm:h-9 lg:h-10 lg:mx-1' src="./svelteLogo.png" alt="svelte.js logo" />      
                                </div>  
                            </div> 

                            <div className="my-5">
                                <p className='sm:text-xl 2xl:text-3xl py-3 font-extrabold'>Back End</p> 
                                
                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <img className='sm:h-8 lg:h-10 mx-1' src="./nodeJsLogo.png" alt="node.js logo" />
                                    <img className='sm:h-9 lg:h-12 sm:pt-1 lg:mx-1' src="./expressJsLogo.png" alt="express.js logo" />
                                    <img className='sm:h-8 lg:h-10 lg:mx-1' src="/public/nextjsLogo.svg" alt="next.js logo" />
                                </div>

                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <img className="sm:h-10 lg:h-12 lg:mx-1" src="./firebaseLogo.png" alt="google firebase logo" />
                                    <img className="sm:h-10 lg:h-14 lg:mx-1" src="./mongodbLogo.svg" alt="mongo db logo" />
                                </div>

                            </div>  

                            <div className="my-5">
                                <p className='sm:text-xl 2xl:text-3xl py-2 font-extrabold'>CSS</p>
                            
                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <img className='sm:h-4 lg:h-6 lg:mx-1' src="./TailwindLogo.svg" alt="tailwind css logo" />
                                    <img className='sm:h-8 lg:h-10 lg:mx-1' src="./sassLogo.svg" alt="sass logo" />
                                </div>

                            </div>  

                            
                    </motion.div>


                

                </div>
            {/* glass panel end */}

            {/* top right corner of glass */}
            <motion.h1 
            whileHover={{ opacity:0 }}
            className='sm:text-7xl lg:text-9xl text-cyan-300 opacity-20 absolute sm:top-1 md:top-3 lg:-top-1 xl:right-2 2xl:right-16 4xl:right-24 5xl:right-32 6xl:right-44 6xl:top-12 7xl:right-64 z-10'>Skills</motion.h1>
            {/* top right corner of glass */}

        </div>
     );
}
 
export default Skills;