import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import Services from '../views/Services.jsx'
import Contact from '../views/Contact.jsx'


export const routeLists = [
    {
        name: "Home",
        path: "/",
        element : <Home />
    },
    {   
        name: 'About',
        path: '/about',
        element : <About />
    },
    {
        name: 'Services',
        path: '/services',
        element : <Services />
    },
    {
        name:'Contact',
        path: '/contact',
        element: <Contact />
    }
]