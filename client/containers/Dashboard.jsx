import React, {useEffect} from 'react';
import NavBar from '.././components/NavBar.jsx';
import {updateDashboardActionCreator} from '../actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import ProjectCreator from "../components/ProjectCreator.jsx";
import ProjectCard from '../components/ProjectCard.jsx';
import { useNavigate } from "react-router";

function Dashboard() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const projectState = useSelector((state) => state.projects);

  // console.log(projectState.projectList)

  const goToProj = () => {
    useNavigate("/ProjectCreator");
  };

  return (
    <div>
      <button>Create Project</button>
      <div>
        {projectState.projectsLoaded === false && <p>Loading...</p>}
        {projectState.projectsLoaded === true &&
          projectState.projectList.length === 0 && <h1>No projects yet</h1>}
        {projectState.projectsLoaded === true &&
          projectState.projectList.length > 0 && <h1>Projects!</h1>}

        <button type="submit" onSubmit={() => goToProj}>
          projectCreator
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
