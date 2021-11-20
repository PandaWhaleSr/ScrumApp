import React from 'react';

const ProjectName = (props) => {
    
    return (
      <div>
        <h4>What is your project name?</h4>
        <input value={props.newLocation} type="text" onChange={props.setNewLocation} />
        <button onClick={props.addMarket}>NEXT</button>
      </div>
    );
  };
  
  export default ProjectName;