import { useEffect, useState } from "react";
import UseTitle from "../../hooks/UseTitle";
import TitleComponent from "../../NewComponents/TitleComponent/TitleComponent";
import SingleBlogCard from "./SingleBlogCard";

const Blog = () => {
    UseTitle("Blog");
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data =>setBlogs(data))
    }, [])
    return (
        <div>
            <TitleComponent title="blogs" subTitle="Tiny Wheels  Big Adventures" />
            <div className="grid md:grid-cols-3 gap-10 mx-3 md:px-20 my-10 md:my-20 ">
                {
                    blogs.map(item => <SingleBlogCard
                        key={item.id}
                        item={item}
                    ></SingleBlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;