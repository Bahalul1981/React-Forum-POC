import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from '../pagese/Header'
import axios from 'axios'
import "./Post.css"

function Post() {

    const {id} = useParams()
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>setData(res.data))

        .catch(err=>{
            console.log(err)
           })
    })
  return (

    <div>
              

          <div className='homepageheader'>
              <h1> Welcome to Proof of Concept post page</h1> 
              <h2>Here you will get all the information the person as you looking for</h2>
              <Header />
          </div>
          
                  {
                      data.map((newdata,index)=>(
                        <div key={index} className='allpost'>
                          <h3>Name: {newdata.name}</h3>
                          <h4>Email: {newdata.email}</h4>
                          <p>Comment: {newdata.body}</p>
                        </div>
                          
                      ))
                  }
     </div>
     
     
   
  )
}

export default Post
