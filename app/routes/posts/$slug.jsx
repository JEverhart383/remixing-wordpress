import { useLoaderData } from "@remix-run/react";
import { getPostBySlug } from "../../../lib/WordPressService"
import Header from "../../components/Header"

export async function loader ({params}) {
  const slug = params.slug
  return await getPostBySlug(slug)
}

export default function Index() {
  const post = useLoaderData()
  return (
    <div>
      <Header title="Home Page" ></Header>
        <main className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
            <h1 className="text-4xl">{post.title}</h1>
            <div className="text-2xl mt-4">{new Date(post.date).toLocaleDateString()}</div>
            <article className="mt-4 space-y-2" dangerouslySetInnerHTML={{__html: post.content}}></article>
        </main>
    </div>
  );
}
