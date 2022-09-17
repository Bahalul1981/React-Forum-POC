import React from 'react'
import Header from '../pagese/Header'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'

import "./Post.css"


function Home() {
   
  
    const[allpost,setAllpost]=useState([])

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        // .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
        console.log(res)
        setAllpost(res.data)
        })
        .catch(err=>{
         console.log(err)
        })

    },[])

  return (

    <div>
        <div className='homepageheader'>
        <h1 >Proof of Concept</h1> 
        <h2>Here you will get all title from API list</h2>
        <Header />
        
    </div>

       
            {allpost.map((post,i)=>(
                <NavLink to={`/post/${post.id}`} key={i} >
                   <h4 className='allposttitel'>Title: {post.title} </h4>
                </NavLink>
                
            ))}
        
        
    </div>
  )
}

export default Home

