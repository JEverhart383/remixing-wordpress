import { client }  from "./apollo"
import { gql } from "@apollo/client"


export async function getPosts(){

    const PostsQuery = gql`
        query GetPosts {
            posts {
                nodes {
                    title
                    content
                    date
                    slug
                }
            }
        }
    `
    const response = await client.query({
        query: PostsQuery
    })

    const posts = response?.data?.posts?.nodes
    return posts
}

export async function getPostBySlug(slug){

    const PostQuery = gql`
        query GetPostBySlug($id: ID!) {
            post(id: $id, idType: SLUG) {
                date
                content
                title
                slug
            }
        }
    `

    const response = await client.query({
        query: PostQuery,
        variables: {
            id: slug
        }
    })

    const post = response?.data?.post
    return post

}