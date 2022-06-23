import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://myremixapp.wpengine.com/graphql',
    cache: new InMemoryCache()
})