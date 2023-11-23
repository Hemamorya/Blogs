import "./App.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";




export default function App() {
  const {fetchBlogPost}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPost();
  },[])
 return(
  <div>
    <Header/>
    <Blogs/>
    <Pagination/>
  </div>
  );
}
