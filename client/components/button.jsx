import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectClicked = (props) => {
    // need to pass data of the project card to the /project page
    const navigate = useNavigate();

    const goToProject = () => {
        // ? shows youre passing in a parameter
        // pass in ID (or something like that) 
        // pass in params defined in project card render
        navigate(
            `/project?id=${props.id}
            &name=${props.name}
            &deadline=${props.deadline}`
        );
    }

    return (
        <button onClick={() => goToProject()} styles='button'>Go to Project</button>
    )
}