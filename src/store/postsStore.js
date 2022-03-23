import {createContext, useEffect, useState} from 'react';

const PostsStore = createContext({});

export const PostsStoreProvider = ({children}) =>{
    const [posts, setPosts] = useState([]);

    return <PostsStore.Provider value={{ posts, setPosts }}>
        {children}
    </PostsStore.Provider>
}

export default PostsStore;