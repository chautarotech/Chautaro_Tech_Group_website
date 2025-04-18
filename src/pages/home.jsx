
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Works from "../components/Works"
import Contact from "../components/Contact"
import { StarsCanvas } from "../components/canvas";
const Home = () =>{
    return (
        <>
        <div className=' w-full bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className=" pt-8 max-sm:pt-0">      
        <Hero/>
            </div>

        </div>
        <About/>
        
        <Experience />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
        <Contact />
        <StarsCanvas/>
        </div>

        </>
    )
}
export default Home;