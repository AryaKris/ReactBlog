//props are ways in which we can pass data from a parent component to child component. Here our parent component is home.js amd bloglist is our child component. Props can make components more reusable.

const BlogList = ({ blogs, title }) => {
    // const blogs  = props.blogs;
    // console.log(props, blogs);

  

    return ( 

        <div className = "blog-list">
            <h2>{title}</h2>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    


                </div>
            ))}  
        </div>
     );
}
 
export default BlogList;