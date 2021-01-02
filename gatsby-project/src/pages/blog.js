import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogPageMain from "../components/BlogPageMain"
 
const blogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <BlogPageMain/> 
    </HeaderFooterLayout>
    
)
 
export default blogPage