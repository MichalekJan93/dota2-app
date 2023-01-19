const BlogPosts = ({data}) => {
    return (
        <div className="blog-posts">
            <h2 className="blog-title">News</h2>
            {
                data.map(news => {
                    return(
                        <div className="blog-post" key={news._id}  style={{ backgroundImage: `url(${news.img})`}}>
                            <h3>{news.title}</h3>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default BlogPosts;