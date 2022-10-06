import { useEffect, useState } from "react"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import './Posts.css'

export default function Posts() {
//fetch data before loading site
async function fetchData() {
    //fetches and sets data to the response object
    let response = await fetch("http://localhost:1337/api/blogs?populate=*")
    let data = await response.json()
    //sets the data to the "posts" variable
    setPosts(data.data)
    console.log(data)
}
//runs the fetch data function in useEffect, to avoid re-rendering
useEffect(() => {
    fetchData()
},[])
//variable declarations
const [posts, setPosts] = useState([])
const [itemClicked, setItemClicked] = useState()
    return (
        <div>
            {/* map the data onto the elements and add a unique key */}
            {posts.map((post, idx) => {
                    return(
                        <article key={idx}>
                        <h2>{post.attributes.title}</h2>
                        <p className="p-author">{post.attributes.author}</p>
                        <p className="p-date">{post.attributes.createdAt.slice(0, -14)}</p>
                        <div className="text-img-container">
                            {/* Add "http://localhost:1337" to the url, for every first image in posts */}
                        <img className="post-img" src={"http://localhost:1337" + post.attributes.images.data[0].attributes.url} alt="Image" />
                        <div className="p-description" dangerouslySetInnerHTML={{__html: post.attributes.description}}></div>
                        </div>
                        <br></br>
                        {/* adds button with onClick that sets the value of individual id's to variable */}
                        <button id={post.id} onClick={(e) => {
                            console.log(e.target.id)
                            setItemClicked(e.target.id)
                        }}>View more images</button>
                        {/* checks the individual id, and gets the images - and switches classes on the image container */}
                        <div id={post.id} className={itemClicked == post.id ? "modal-container" : "modal-off"}>
                            {/* Clears the id value, which makes the line above hide the images */}
                        <span onClick={() => {setItemClicked()}}>✖</span>
                        <div className="grid-container">
                            {/* maps the remaining images into the container, and maps using the post variable from earlier */}
                    {post.attributes.images.data.map((post, idz) => {
                        return(
                            <>
                            {/* Gets individual images which doesent have an id value of 0 so first image isnt shown again */}
                            {idz != 0 ? <img src={"http://localhost:1337" + post.attributes.url} alt="Image" /> : ""}
                            </>
                        )
                    })}
                    </div>
                    </div>
                    </article>
                )
            })}
        </div>
    )
}