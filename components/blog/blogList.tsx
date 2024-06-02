import BlogCard from "./blogCard";


export default function BlogList() {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
                <BlogCard/>
            </div>
            <div>
                <BlogCard/>
            </div>
            <div>
                <BlogCard/>
            </div>
            <div>
                <BlogCard/>
            </div>
            <div>
                <BlogCard/>
            </div>
        </div>
    )
}