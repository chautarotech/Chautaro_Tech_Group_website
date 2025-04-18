
const Footer = () =>{
    return(
        <>
<section className="bg-primary">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-white">
                    About
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-white">
                    Blog
                </a>
            </div>
            
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-white">
                    Categories
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6 gap-4">
            
            <a href="https://www.linkedin.com/company/chautaro-tech-group/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <i className="fa-brands fa-linkedin-in fa-2x"></i>
            </a>
            
        </div>
        <div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2025 Chautaro Tech Group.
        </p>
        <p className=" ext-base leading-6 text-center text-gray-400">
            All rights reserved.
        </p>
        </div>
    </div>
</section>
        </>
    )
}
export default Footer;