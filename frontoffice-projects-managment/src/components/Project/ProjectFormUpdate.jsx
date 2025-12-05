import React from 'react'
import {useForm} from 'react-hook-form'
import { updateProject } from '../operationsProjects';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


const ProjectFormUpdate = () => {
    
    const schema = yup.object().shape({
        codeProject : yup.string().required(),
        desc : yup.string().required(),
        startDate: yup.date().required(),
    })  
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });
const onSubmit = (data)=>{
    updateProject(data.codeProject,data.desc,data.startDate,(res)=>{
        console.log("project updated");
    })
    
}

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        
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
        
        
       
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Update Project</button>
        </div>
    </form>
    </div>
  )
}

export default ProjectFormUpdate
