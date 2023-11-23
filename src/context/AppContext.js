import { useState, createContext, useEffect } from "react";
import { baseUrl } from "../baseUrl"; // Assuming you have baseUrl defined elsewhere

// Step 1: Create the context
export const AppContext = createContext();

// Step 2: Create the context provider
export default function AppContextProvider({ children }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    async function fetchBlogPost(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json(); // Fix variable name here, it should be 'data' not 'url'
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPage(data.totalPage);
        } catch (error) {
            console.log(error); // Fix this to log the actual error
            setPost([]);
            setPage(1);
            setTotalPage(null);
        }
        setLoading(false);
    }

    useEffect(() => {
        // Fetch initial data when the component mounts
        fetchBlogPost();
    }, []);

    function handlePageChange(newPage) {
        setPage(newPage);
        fetchBlogPost(newPage);
    }

    const value = {
        post,
        loading,
        page,
        totalPage,
        fetchBlogPost,
        handlePageChange,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
