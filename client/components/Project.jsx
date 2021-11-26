// dummy div to render on page
import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { useSearchParams } from "react-router-dom";

export const Project = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()  
    
    return(
        <div>
            <ProjectCard />
            {searchParams.get('id')}
            {searchParams.get('name')}
            {searchParams.get('deadline')}
        </div>
    )
} 