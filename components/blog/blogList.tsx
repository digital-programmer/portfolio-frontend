import BlogCard from "./blogCard";


export default function BlogList() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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