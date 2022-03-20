

const Skills= () => {
    return ( 
        <div className='min-h-screen bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-500 flex items-center justify-center relative text-gray-100'>
    
   

                <div className="absolute flex items-center justify-around z-10 opacity-60">
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 sm:-left-10 bg-cyan-300 rounded-full mix-blend-multiply filter blur-lg animate-blob"></div>
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 sm:-right-10 bg-[#5BFDB5] rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000"></div>
                    <div className="absolute z-10 h-56 w-56 xl:h-64 xl:w-64 sm:-top-2 bg-sky-400 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000"></div>
                </div>
               

            {/* glass panel start */}
                <div className='bg-slate-500 rounded-xl lg:h-[75vh] w-9/12 shadow-2xl shadow-cyan-400 z-20 bg-opacity-40 backdrop-blur-md grid sm:grid-cols-1 grid-cols-3 text-center lg:mt-8'>
                
                    <div className="sm:container lg:grid lg:grid-cols-3 lg:items-center text-center">


                            <div className='lg:col-span-3 sm:px-4 xl:mb-10'>
                                <p className='text-md 2xl:text-xl py-2'>I have skills in Javascript using the <span className="font-extrabold">"FERN"</span> stack which consists of</p>
                                    <div className="sm:py-2 lg:py-4 2xl:text-xl">
                                        <p>Firebase</p> 
                                        <p>Express.JS</p>
                                        <p>React.JS</p>
                                        <p>Node.JS</p>
                                    </div>
                                <p className="text-md 2xl:text-xl">I then use Tailwind CSS as my CSS framework of choice to truely bring out my creativity as a developer.</p>       
                            </div>



                            <div className="my-5">
                                <p className='sm:text-xl 2xl:text-3xl py-3 font-extrabold'>Front End</p>
                                
                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <p className="sm:mx-5 xl:text-lg">React</p> 
                                    <p className="sm:mx-5 xl:text-lg">Svelte</p>       
                                </div>  
                            </div> 

                            <div className="my-5">
                                <p className='sm:text-xl 2xl:text-3xl py-3 font-extrabold'>Back End</p> 
                                
                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <p className="sm:mx-5 2xl:text-lg">Node.JS</p> 
                                    <p className="sm:mx-5 2xl:text-lg">Express.JS</p> 
                                    <p className="sm:mx-5 2xl:text-lg">Next.JS</p>
                                </div>

                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <p className="pt-2 sm:mx-5 2xl:text-lg">Firebase</p>
                                    <p className="sm:pt-2 sm:mx-5 2xl:text-lg">MongoDB</p>
                                </div>

                            </div>  

                            <div className="my-5">
                                <p className='sm:text-xl 2xl:text-3xl py-2 font-extrabold'>CSS</p>
                            
                                <div className="sm:flex sm:items-center sm:justify-center">
                                    <p className="sm:mx-5 2xl:text-lg">Tailwind Css</p> 
                                    <p className="sm:mx-5 2xl:text-lg">Sass</p>
                                </div>

                            </div>  

                            
                    </div>


                

                </div>
            {/* glass panel end */}

            {/* top right corner of glass */}
            <h1 className='sm:text-7xl lg:text-9xl text-cyan-300 opacity-20 absolute sm:top-8 md:top-12 lg:-top-1 xl:right-2 2xl:right-16 4xl:right-24 5xl:right-32 6xl:right-44 6xl:top-12 7xl:right-64 z-10'>Skills</h1>
            {/* top right corner of glass */}

        </div>
     );
}
 
export default Skills;