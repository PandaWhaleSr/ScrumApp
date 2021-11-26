import React from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProjectClicked } from './button.jsx';
// import { useSearchParams } from 'react-router-dom';

// dummy data
const projectCard = {
    id: 1,
    projectName: 'make project card',
    deadline: 'today',
    goal: 'render card to page',
    // projectButton: false,
}


// navigate similar to a reroute functionality

const ProjectCard = (props) => {
    // const dispatch = useDispatch();

    // const [] = useState()
    // const navigate = useNavigate();

    return (
        // return within parent 
        // <div className='projectContainer'>
            <div className='projectCard'>
                    {/* <h4>Name: {props.projectName}</h4>
                    <h4>Deadline: {props.deadline}</h4>
                    <h4>Goal: {props.goal}</h4> */}

                    {/* This uses the dummy code */}
                    <h4>Name: {projectCard.projectName}</h4>
                    <h4>Deadline: {projectCard.deadline}</h4>
                    <h4>Goal: {projectCard.goal}</h4>
                    {/* pass in id here as well */}
                    {/* <ProjectClicked id={props.id} /> */}

                    {/* dummy code */}
                    <ProjectClicked 
                    id={projectCard.id} 
                    name={projectCard.projectName} 
                    deadline={projectCard.deadline} />
            </div>
        // </div>
    );
};
  
  export default ProjectCard;