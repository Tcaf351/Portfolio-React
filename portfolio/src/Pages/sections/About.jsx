// packages
import { motion } from 'framer-motion';

const About = () => {
    return ( 
        <div id="about" className='min-h-screen bg-gradient-to-tl from-slate-500 via-slate-600 to-slate-700 flex items-center justify-center relative text-gray-100'>
    
            {/* glass panel start */}
            <div className='bg-[#111928] rounded-xl sm:h-[80vh] lg:h-[75vh] w-9/12 p-10 shadow-2xl shadow-cyan-800 z-20 bg-opacity-60 backdrop-blur-md flex justify-center flex-col text-center lg:mt-8'>
            
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            >
                <div className="2xl:my-10">
                    <p className='text-lg'>My name is Tim Cafarella and I began my journey in web development in early 2020 when I came across a video from a youtuber I watched freqently at the time of a friend of his building his website. I then checked out this coders youtube and was instantly mesmorised about the endless possibilities that you have with coding, and the man things that are possible to build with enough time and dedication. It was at this point that I knew web development was my next chapter for my journey.</p>
                </div>

                <div className="2xl:my-10">
                    <p className='text-lg'>I am currently looking for an Graduate Position or a Junior Front End Developer position to take my skills and abilities to the next level.</p>
                </div> 
    
                <div className="2xl:my-10">
                    <p className='text-lg my-6'>I have completed a certificate IV of Information Technology (Web Development).</p>
                    <p className="text-lg my-6">I am currently half way through a Diploma of Information Technology (Front End Web Development) with Diploma of Information Technology (Back End Web Development).</p>
                    <p className="text-lg my-6">I will be finished with the diploma mid June.</p>
                </div>  
            </motion.div>    
                
            </div>
            {/* glass panel end */}
                
            {/* top left corner of glass */}
            <motion.h1
            whileHover={{ opacity: 0 }}
            className='sm:text-7xl lg:text-9xl text-cyan-300 opacity-20 absolute sm:top-1 md:top-1 lg:-top-1 xl:left-3 2xl:left-14 4xl:left-20 5xl:left-28 6xl:left-40 6xl:top-12 7xl:left-56 z-10'>About</motion.h1>
            {/* top left corner of glass */}
    
            {/* circle bottom right side start */}
            <div className='bg-cyan-300 h-64 w-64 rounded-full absolute sm:right-5 sm:bottom-8 lg:right-8 lg:bottom-2 xl:right-20 2xl:right-24 3xl:right-36 4xl:right-44 5xl:right-52 6xl:right-60 7xl:right-72 z-10'></div>
            {/* circle bottom right side end */}
    
            {/* circle middle left side start */}
            <div className='bg-sky-400 h-36 w-36 rounded-full absolute sm:left-4 lg:left-14 xl:left-24 2xl:left-32 3xl:left-40 4xl:left-48 5xl:left-56 6xl:left-72 7xl:left-80 z-10'></div>
            {/* circle middle left side end */}
    
            {/* circle top right side start */}
            <div className='bg-slate-500 h-40 w-40 rounded-full absolute sm:right-12 lg:right-20 xl:right-32 2xl:right-36 3xl:right-44 4xl:right-52 5xl:right-60 6xl:right-72 7xl:right-80 top-36 z-10'></div>
            {/* circle top right side end */}
    
        </div>
     );
}
 
export default About;