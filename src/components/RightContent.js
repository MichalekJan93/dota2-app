import { useState, useEffect } from "react";
import { GetData } from "../server/getData";
import BlogPosts from "./BlogPosts";

const RightContent = () => {

    const [newsData, setNewsData] = useState();

    useEffect( () => {
        const url = "http://localhost:5000/api/news";
        const fetchData = async () => {
          try{
            const data = await GetData(url);
            setNewsData(data);
          }catch(error){
            console.log(error)
          }
        }
        fetchData();
      }, []);

    return (
        <div className="right-content-box">
            { newsData && <BlogPosts data={newsData}/>}
        </div>
    )
}

export default RightContent;