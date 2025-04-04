
const Footer = () =>{
    return(
        <>
<section class="bg-primary">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-white">
                    About
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-white">
                    Blog
                </a>
            </div>
            {/* <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Team
                </a>
            </div> */}
            {/* <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Pricing
                </a>
            </div> */}
            {/* <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div> */}
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-white">
                    Categories
                </a>
            </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6 gap-4">
            <a href="https://www.facebook.com/shiril.mahato/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/shirilmahato/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/shiril-mahato/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <i class="fa-brands fa-linkedin-in fa-2x"></i>
            </a>
            <a href="https://github.com/ShirilMahato" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <i class="fa-brands fa-github fa-2x"></i>
            </a>
        </div>
        <div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2025 Chautaro Tech Group.
        </p>
        <p class=" ext-base leading-6 text-center text-gray-400">
            All rights reserved.
        </p>
        </div>
    </div>
</section>
        </>
    )
}
export default Footer;