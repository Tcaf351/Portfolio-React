

const Footer = () => {
    const date = new Date().getFullYear();

    return ( 
        <footer className="flex items-center justify-center py-10 bg-slate-800 text-gray-100">
            <p className="text-lg">Copyright &copy; { date } Timothy Cafarella</p>
        </footer>
     );
}
 
export default Footer;