import React, {Fragment} from 'react';
import LoadableVisibility from "react-loadable-visibility/react-loadable";
import Loader from "./Components/layout/Loader";
const Navbar = LoadableVisibility({
    loader: () => import("./Components/layout/Navbar"),
    loading: "Loading"
});
const WelcomePage = LoadableVisibility({
    loader: () => import("./Components/sections/Welcome /WelcomePage"),
    loading: "Loading"
});

const AboutMe = LoadableVisibility({
    loader: () => import("./Components/sections/About Me/AboutMe"),
    loading: "Loading"
});
const Projects = LoadableVisibility({
    loader: () => import("./Components/sections/Projects/Projects"),
    loading: "Loading"
});
const ContactMe = LoadableVisibility({
    loader: () => import("./Components/sections/About Me/ContactMe"),
    loading: "Loading"
});
const Skills = LoadableVisibility({
    loader: () => import("./Components/sections/About Me/Skills"),
    loading: "Loading"
});
const Footer = LoadableVisibility({
    loader: () => import("./Components/layout/Footer"),
    loading: "Loading"
});

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