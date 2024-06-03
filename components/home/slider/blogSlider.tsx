import BlogCard from "@/components/blog/blogCard";

export default function BlogSlider() {
    return <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
}