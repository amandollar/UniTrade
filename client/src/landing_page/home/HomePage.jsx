import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import CreateAccount from "../OpenAccount";

function HomePage(){
    return <>
             <Hero/>
             <Awards/>
             <Stats/>
             <Pricing/>
             <Education/>
             <CreateAccount/>
           </>
}


export default HomePage;