import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getPost = async () => {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        getPost();
    }, [url]);

    // It sents the request to backend every 10 seconds so that if any of the post gets updated then we will get the updated post
    // useEffect(() => {
    //     let clock = setInterval(getPost, 10000)

    //     return () => {
    //         console.log("unmount");
    //         clearInterval(clock)
    //     }
    // }, [])

    return {
        data,
        loading
    };
}