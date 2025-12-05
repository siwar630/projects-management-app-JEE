import React from 'react'
import {useForm} from 'react-hook-form'
import {  addTask } from '../operationsProjects';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const TaskForm = () => {
  const schema = yup.object().shape({
    codeProject : yup.string().required(),
    codeTask : yup.string().required(),
    desc : yup.string().required(),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
})  
const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
});
const onSubmit = (data)=>{
addTask(data.codeProject,data.codeTask,data.desc,data.startDate,data.endDate,(res)=>{
    console.log("Task added");
})

}

return (
<div>
  <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
  <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Task Code</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Project Code"  {...register("codeTask")} />
        <p>{errors.codeTask?.message}</p>
    </div>
    <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Project Code</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Project Code"  {...register("codeProject")} />
        <p>{errors.codeProject?.message}</p>
    </div>
    <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Decription</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="description ...." {...register("desc")}/>
        <p>{errors.desc?.message}</p>
    </div>
    <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">Start Date</label>
        <input type="date" className="form-control" id="inputCity"  {...register("startDate")} />
        <p>{errors.startDate?.message}</p>
    </div>
    <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">End Date</label>
        <input type="date" className="form-control" id="inputCity"  {...register("endDate")} />
        <p>{errors.endDate?.message}</p>
    </div>
    
    
   
    <div className="col-12">
        <button type="submit" className="btn btn-primary">Add Task</button>
    </div>
</form>
</div>
)
}

export default TaskForm
