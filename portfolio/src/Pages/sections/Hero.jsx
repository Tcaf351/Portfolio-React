

const Hero = () => {
    return ( 
        // background
        <div className='text-gray-100'>
            
            {/* heading start */}
            <div className='min-h-screen w-full flex flex-col justify-center sm:p-10 lg:p-24 bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-500'>

                {/* animation blog start */}
                <div className="flex items-center justify-center">
                    <div className="relative flex items-center justify-between opacity-50">
                        <div className="absolute z-20 top-0 -left-10 h-72 w-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                        <div className="absolute z-20 top-0 -right-4 h-72 w-72 bg-[#5BFDB5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                        <div className="absolute z-20 top-16 -right-32 h-72 w-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                    </div>
                </div>   
                {/* animation blog end */}

                <div className="relative flex items-center justify-around z-20 mb-10 text-left">
                    <div className='my-8 py-3'>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>H</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>i</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>,</span> <br />

                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>I</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>'</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>m </span>

                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>T</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>i</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>m</span> <br />

                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>F</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>r</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>o</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>n</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>t </span>

                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>E</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>n</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>d </span>

                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>W</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>e</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>b </span>

                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>D</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>e</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>v</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>e</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>l</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>o</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>p</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>e</span>
                        <span className='text-4xl py-1 hover:text-cyan-300 transition ease-in duration-300'>r</span>

                        <p className='text-sm text-gray-400 tracking-widest animate-pulse'>CSS / JavaScript / React</p>
            
                        <button className="mt-8 py-1 px-4 rounded-lg text-gray-100 bg-cyan-500 ease-in-out duration-500 hover:bg-blue-500"><a href="mailto:tcaf.351@gmail.com">Contact Me</a></button>
                    </div>


        
                    <div className='rounded-lg'>
                        <img className='rounded-lg' src="./Me.png" alt="Timothy Cafarella" />
                    </div>
                </div>
    
                <div className='flex items-center justify-center z-20'>
                    <a href="https://github.com/Tcaf351" target="_blank" rel="noreferrer"><img className='shadow-md shadow-gray-900 h-8 w-8 sm:mx-7 md:mx-10 lg:mx-16 2xl:mx-20 hover:h-10 hover:w-10 hover:shadow-md hover:shadow-cyan-300 ease-in-out duration-300 rounded-full' src='/github.png' alt="github icon" /></a>
        
                    <a href="https://au.linkedin.com/in/timothy-cafarella-a742731bb" target="_blank" rel="noreferrer"><img className='shadow-md shadow-gray-900 h-8 w-8 sm:mx-7 md:mx-10 lg:mx-16 2xl:mx-20 hover:h-10 hover:w-10 hover:shadow-md hover:shadow-cyan-300 ease-in-out duration-300 rounded-full'  src='/linkedin.png' alt="linkedin icon"></img></a>
                </div>
            </div>    
        </div>    
        // heading end
     );
}
 
export default Hero;