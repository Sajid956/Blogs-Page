import { createContext, useState } from "react";
import axios from "axios";


export const AppContext = createContext();

export default function AppContextProvider ({children}) {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchData () {

        const url = "https://codehelp-apis.vercel.app/api/get-blogs";
        setLoading(true);
        console.log('in fetchData');

        try {
            const response = await axios.get(`${url}?page=${page}`);
            setPage(response.data.page);
            setTotalPage(response.data.totalPages);
            setBlogs(response.data.posts);
            console.log('here is response', response.data.posts)

        } catch (error) {
            alert('Something went wrong');
            setPage(1);
            setTotalPage(null);
            setBlogs([]);
        }

        setLoading(false);
        
    }

    const value = {
        page,
        setPage,
        totalPage,
        setTotalPage,
        blogs,
        setBlogs,
        loading,
        setLoading,
        fetchData
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}



