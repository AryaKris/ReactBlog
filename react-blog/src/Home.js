import {useState, useEffect} from'react';
import BlogList from './BlogList';

//package json server help us create a fake rest api
const Home = () => {

    const [blogs,setBlogs] = useState() ;


    
    //useEffects is useful when we have to run a set of code or fire a function after every render 
    useEffect(()=>{

        fetch ('http://localhost:8000/blogs')
        .then (res => {
            return res.json();
        })
        .then (data =>{
          console.log(data)  ;
          setBlogs(data);
        })

    }, []);

    return (
        <div className="home">
            {/* conditional templating in react  - dynamic checkin - some js - logical and - here logical and evaluates the left first and if this is false it never even bothers with the right    */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
        </div>
    );
}

export default Home;