
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skill";
import Experience from "../components/Experience";
import Tech from "../components/Tech"
import Works from "../components/Works"
import Feedbacks from "../components/Feedbacks"
import Contact from "../components/Contact"
// import StarsCanvas from "../components"
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
        {/* <div className='relative z-0'>
        <Skills />
        <StarsCanvas />
        </div> */}
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