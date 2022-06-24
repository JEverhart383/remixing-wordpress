import { Link } from "@remix-run/react"

export default function Post({post}){
    return (
        <Link prefetch="render" to={`/posts/${post.slug}`}>
            <div className="flex 
            items-center 
            bg-gradient-to-r
            from-cyan-500 
            to-blue-500 
            p-8 
            rounded-lg 
            text-white 
            transition-all 
            hover:-translate-y-1 
            hover:scale-105"
            >
                <div>
                    <h2 className="font-semibold text-2xl">{post.title}</h2>
                    <p>{ new Date(post.date).toLocaleDateString() }</p>
                </div>
            </div>
        </Link>

    )
}