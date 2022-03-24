// import Button  from 'react-bootstrap/Button'

const Error = () => {
    return ( 
        <div className="min-h-screen text-gray-100 flex items-center justify-center flex-col bg-gradient-to-bl from-sky-400 to-indigo-900">
            <h1 className="text-9xl py-5">404</h1>
            <h1 className="text-3xl font-semibold py-3">Looks like you encountered an error</h1>
            <img className="rounded-xl shadow-2xl" src="/larryDavid.jpeg" alt="larry david" />
            {/* <Button variant='info'>Go Back</Button> */}
        </div>
     );
}
 
export default Error;