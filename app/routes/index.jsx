import Post from "../components/Post"
import Header from "../components/Header"
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../../lib/WordPressService"

export async function loader (){
  return await getPosts()
}


export default function Index() {
  const posts = useLoaderData();
  return (
    <div>
      <Header title="Home Page" ></Header>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
          {posts.map(post => {
              return (
                <Post post={post} key={post.title}></Post>
              )
            })}
        </div>
    </div>
  );
}
