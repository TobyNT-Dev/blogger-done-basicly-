import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LogoImage from './img/nav-logo.png'
import './Nav.css'

export default function Nav() {
    //data fetch function
    async function fetchSideData() {
        //fetches and sets data to the res object
        let res = await fetch("http://localhost:1337/api/blogs")
        let sData = await res.json()
        //sets the data to the "sidebarData" variable
        setSidebarData(sData.data)
        console.log(sData)
    }
    //runs the fetch data function in useEffect, to avoid re-rendering
    useEffect(() => {
        fetchSideData()
    },[])
    //sets the data variable
    const [ sidebarData, setSidebarData ] = useState([])
    
    return(
        <>
        <nav>
            {/* links for the different pages */}
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
        </nav>
        {/* The sidebar component which gets the "title" data from the database */}
        <div className="sidebar">
            <img src={LogoImage} alt="The-Blog.com Logo" />
            <h2 className="side-header">Latest blog posts:</h2>
            {/* Maps the data onto the elements to have data appear in the sidebar */}
        {sidebarData.map((sdata, idy) => {
            return(
                <div className="sidebar-data" key={idy}>
                <h3 className="sdata">{sdata.attributes.title}</h3>
            </div>
            )
        })}
        </div>
        </>
    )
}