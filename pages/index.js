import React, {Fragment} from 'react';
import WelcomePage from "./Components/sections/Welcome /WelcomePage";
import Navbar from "./Components/layout/Navbar";
import AboutMe from "./Components/sections/About Me/AboutMe";
import Projects from "./Components/sections/Projects/Projects";
import ContactMe from "./Components/sections/About Me/ContactMe";
import Skills from "./Components/sections/About Me/Skills";
import Footer from "./Components/layout/Footer";

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