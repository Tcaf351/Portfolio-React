// packages
import { motion } from 'framer-motion';

const Hero = () => {
    return ( 
        // background
        <div className='text-gray-100'>
            
            {/* heading start */}
            <div className='min-h-screen w-full flex flex-col justify-center sm:p-10 lg:p-24 bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-400'>

                {/* animated blob start */}
                <div className="flex items-center justify-center">
                    <div className="relative flex items-center justify-between opacity-50">
                        <div className="absolute z-20 top-0 -left-10 h-72 w-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                        <div className="absolute z-20 top-0 -right-4 h-72 w-72 bg-[#5BFDB5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                        <div className="absolute z-20 top-16 -right-32 h-72 w-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                    </div>
                </div>   
                {/* animated blob end */}

                <div className="relative flex items-center justify-around z-20 mb-10 text-left">
                    <motion.div className='my-8 py-3'
                                initial={{ x: -850 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.1 }}
                    >
                        <div className='flex'>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>H</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>i</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>,</p></motion.div>
                        </div>

                        <div className='flex'>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-100'>I</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-100'>'</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 pr-2 hover:text-cyan-300 transition ease-in duration-100'>m</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-100'>T</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-100'>i</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-100'>m</p></motion.div>
                        </div>

                        <div className='flex'>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>F</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>r</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>o</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>n</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 pr-2 hover:text-cyan-300 transition ease-in duration-150'>t</p></motion.div>

                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>E</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>n</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 pr-2 hover:text-cyan-300 transition ease-in duration-150'>d</p></motion.div>

                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>W</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>e</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 pr-2 hover:text-cyan-300 transition ease-in duration-150'>b</p></motion.div>

                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>D</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p  className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>e</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>v</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>e</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>l</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>o</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>p</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-150'>e</p></motion.div>
                            <motion.div whileHover={{ scale: 1.4 }}><p className='text-4xl py-1 sm:pr-5 md:pr-0 hover:text-cyan-300 transition ease-in duration-150'>r</p></motion.div>
                        </div>
                        

                        <p className='text-sm text-gray-400 tracking-widest animate-pulse'>CSS / JavaScript / React</p>
            
                        <motion.button whileHover={{ scale: 1.1 }} className="mt-8 py-1 px-4 rounded-lg text-gray-100 bg-cyan-500 ease-out duration-300 hover:bg-blue-500"><a href="mailto:tcaf.351@gmail.com">Contact Me</a></motion.button>
                    </motion.div>


        
                    <div className='rounded-lg'>
                        <motion.img className='rounded-xl'
                                    initial={{ x: 550 }}
                                    animate={{ x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    src="./me.png" 
                                    alt="Timothy Cafarella" />
                    </div>
                </div>
    
                <motion.div className='flex items-center justify-center z-20'
                            initial={{ y: 350 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.1 }}
                            >
                    <a href="https://github.com/Tcaf351" target="_blank" rel="noreferrer"><motion.img 
                    whileHover={{ scale: 1.1 }}
                    className='shadow-md shadow-gray-900 h-8 w-8 sm:mx-7 md:mx-10 lg:mx-16 2xl:mx-20 hover:h-10 hover:w-10 hover:shadow-md hover:shadow-cyan-300 ease-out duration-150 rounded-full' 
                    src='/github.png' 
                    alt="github icon" /></a>
        
                    <a href="https://au.linkedin.com/in/timothy-cafarella-a742731bb" target="_blank" rel="noreferrer"><motion.img 
                    whileHover={{ scale: 1.1 }}
                    className='shadow-md shadow-gray-900 h-8 w-8 sm:mx-7 md:mx-10 lg:mx-16 2xl:mx-20 hover:h-10 hover:w-10 hover:shadow-cyan-300 ease-out duration-150 rounded-full'  
                    src='/linkedin.png' 
                    alt="linkedin icon" /></a>
                </motion.div>
            </div>    
        </div>    
        // heading end
     );
}
 
export default Hero;