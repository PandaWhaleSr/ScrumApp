import React from 'react';
import { useNavigate } from 'react-router';



export default function ProjectCreator() {
  //const navigate = useNavigate();

  const submit = (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      useNavigate('/dashboard');
      };
    
  return (
    <div>
      <h1>Project Creator</h1>
      <form onSubmit={submit}>
        <label>Project Name:</label>
          <input type="text" name="projectName" />
        <label>Goal:</label>
          <input type="text" name="goal"  />
        <label>Deadline</label>
          <input type="date" name="deadline"  />
          <input type="submit" value="Submit" />
      </form>
    </div>
    );}  