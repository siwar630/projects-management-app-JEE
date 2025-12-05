import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { deleteTask, getAllTasks  } from '../operationsProjects';


export default function TasksList() {
    const [tasksList,setTasksList]=useState([]);
    const displayTasks = () => getAllTasks((res)=>{
        
        setTasksList(res.data);
    })
  
    const deleteAtask =(codeTask)=>{
      deleteTask(codeTask,()=>{
          console.log("task removed");
      })
    }
  
    useEffect(()=>{
      displayTasks();
    },[tasksList]);
    
    return (
      <div className='container my-5'>
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Task Code</th>
                      <th scope="col">Project Code</th>
                      <th scope="col">Description</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th scope="col">Options</th>
                  </tr>
              </thead>
              <tbody>
              {tasksList.map((task,index) => (
                  <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{task.codeTask}</td>
                      <td>{task.project.codeProject}</td>
                      <td>{task.description}</td>
                      <td>{task.startDate}</td>
                      <td>{task.endDate}</td>
                      <td>
                          
                              <Link to="/updateTask" className="btn btn-success mx-2">Edit</Link>
                              <button type="button" className="btn btn-danger mx-2" onClick={()=>{deleteAtask(task.codeTask)}}>Delete</button>
                          
                      </td>
                  </tr>  
                  ))}
              </tbody>
          </table>
          <Link className="btn btn-primary" to="/addTask">Add Task</Link>
        
         
      </div>
    )
}
