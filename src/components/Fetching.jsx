import React, { useState ,useEffect} from "react";
import axios from "axios";

function DataFetch(){
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts ')
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <ul>
                {
                    posts.map(post=> <li key={post.id}>{post.title} <button>Dismiss</button></li> )
                }
                
            </ul>
        </div>
    )
}

export default DataFetch