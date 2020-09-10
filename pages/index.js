import React, {Fragment} from 'react';
import loadable from 'react-loadable-visibility/loadable-components';
const WelcomePage=loadable(()=>import("./Components/sections/Welcome /WelcomePage"),{ssr:true})
const Navbar=loadable(()=>import("./Components/layout/Navbar"),{ssr:true})
const AboutMe=loadable(()=>import("./Components/sections/About Me/AboutMe"),{ssr:true})
const Projects=loadable(()=>import("./Components/sections/Projects/Projects"),{ssr:true})
const ContactMe=loadable(()=>import("./Components/sections/About Me/ContactMe"),{ssr:true})
const Skills=loadable(()=>import("./Components/sections/About Me/Skills"),{ssr:true})
const Footer=loadable(()=>import("./Components/layout/Footer"),{ssr:true})

function App() {

    return (
        <Fragment>
            <Navbar/>
            <WelcomePage/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </Fragment>
    );
}

export default App;