import React, { useEffect } from "react";
import { updateDashboardActionCreator } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const projectState = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(updateDashboardActionCreator());
  }, [projectState.projectsLoaded]);

  return (
    <div>
      <button>Create Project</button>
      <div>
        {projectState.projectsLoaded === false && <p>Loading...</p>}
        {projectState.projectsLoaded === true &&
          projectState.projectList.length === 0 && <h1>No projects yet</h1>}
        {projectState.projectsLoaded === true &&
          projectState.projectList.length > 0 && <h1>Projects!</h1>}
        {/* Projects go here */}
      </div>
    </div>
  );
}

export default Dashboard;
