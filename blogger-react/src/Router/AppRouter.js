import { Routes, Route } from 'react-router-dom'
import Footer from '../Comps/Footer/Footer'
import Nav from '../Comps/Nav/Nav'
import About from '../Sites/About/About'
import Blogs from '../Sites/Blogs/Blogs.js'
import Contact from '../Sites/Contact/Contact'
import Home from '../Sites/Home/Home.js'

export const AppRouter = () => {
    return (
        <>
        {/* shows the navigation bar on every page */}
        <Nav />
        {/* Creating the routes for the links in the navigation-bar */}
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* shows the footer on every page */}
        <Footer />
        </>
    )
}

