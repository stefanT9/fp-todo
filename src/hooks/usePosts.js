import {useState, useEffect, useContext} from 'react';
import useFetch from './useFetch';
import {PostsStore} from '../store/postsStore';


export const usePosts = ()=>{
    const {data, error, isPending } = useFetch('/posts');
    const {posts, setPosts} = useContext(PostsStore);

    useEffect(()=>{
        setPosts(data);
    }, [data]);

    return {posts, error, isPending};
}