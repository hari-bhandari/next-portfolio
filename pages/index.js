import React, {Fragment} from 'react';
import './css/bootstrap.css'
import LoadableVisibility from "react-loadable-visibility/react-loadable";
import Loader from "./Components/layout/Loader";
const Navbar = LoadableVisibility({
    loader: () => import("./Components/layout/Navbar"),
    loading: Loader
});
// const WelcomePage = LoadableVisibility({
//     loader: () => import("./Components/sections/Welcome /WelcomePage"),
//     loading: Loader
// });
//
// const AboutMe = LoadableVisibility({
//     loader: () => import("./Components/sections/About Me/AboutMe"),
//     loading: Loader
// });
// const Projects = LoadableVisibility({
//     loader: () => import("./Components/sections/Projects/Projects"),
//     loading: Loader
// });
// const ContactMe = LoadableVisibility({
//     loader: () => import("./Components/sections/About Me/ContactMe"),
//     loading: Loader
// });
// const Skills = LoadableVisibility({
//     loader: () => import("./Components/sections/About Me/Skills"),
//     loading: Loader
// });
// const Footer = LoadableVisibility({
//     loader: () => import("./Components/layout/Footer"),
//     loading: Loader
// });

function App() {

    return (
        <Fragment>
            <Navbar/>
            {/*<WelcomePage/>*/}
            {/*<AboutMe/>*/}
            {/*<Skills/>*/}
            {/*<Projects/>*/}
            {/*<ContactMe/>*/}
            {/*<Footer/>*/}
        </Fragment>
    );
}

export default App;