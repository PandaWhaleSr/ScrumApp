import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProjectActionCreator } from '../actions/actions';
import { useEffect } from 'react';


export default function ProjectCreator() {
  //const navigate = useNavigate();

  const [project, setProject] = useState({
    //userid: res.locals.user,
    title: "",
    description: "",
    goal: "",
    date: ""
  });


  const handleTitle = e => {
    
    setProject({...project, title: e.target.value});
  };
  const handleDescription = e => {
  
    setProject({...project, description: e.target.value}); 
  };
  const handleGoal = e => {
   
    setProject({...project, goal: e.target.value});
  };
  const handleDeadLine = e => {
 
    setProject({...project, date: e.target.value});
  };




  const submit = e => {
   //prevent default and call the addProjectActionCreator with the project object
    e.preventDefault();
    const dispatch = useDispatch();
    dispatch(addProjectActionCreator(project));
  
  };
   
  

  return (
    <div>
      <h1>Project Creator</h1>
  
       <form >
        <label>Project Name:</label>
          <input type="text" name="title" onFocus = {(e)=> handleTitle(e)}  />
        <label>Description:</label>
          <input type="text" name="description" onFocus = {(e)=> handleDescription(e)} />
        <label>Goal:</label>
          <input type="text" name="goal" onFocus = {(e)=> handleGoal(e)} />
        <label>Deadline</label>
          <input type="date" name="deadline" onClick = {(e)=> handleDeadLine(e)} />
        <button className = "projButton" onClick = {submit}> </button>
      </form> 
    </div>
  );
}  


//params = [description, deadline, res.locals.user];  


    /*<input value={} type="text" onChange={props.setNewLocation} />
        <button onClick={}>NEXT</button> */