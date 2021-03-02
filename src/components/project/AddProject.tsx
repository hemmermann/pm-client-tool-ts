import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useHistory } from "react-router-dom"
import {
  useMutation,
  // QueryClient
} from 'react-query'
import axios from 'axios'
import Project from './data/Project'

const AddProject = () => {
  const [project, setProjectState] = useState({
    id: '',
    projectIdentifier: '',
    projectName: '',
    description: '',
    start_date: '',
    end_date: '',
  })

  
  const history = useHistory()

  const createProject = useMutation((newProject: Project) =>
    axios.post<Project>('http://localhost:8778/api/project', newProject)
  )

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newProject: Project = {
      projectName: project.projectName,
      projectIdentifier: project.projectIdentifier,
      description: project.description,
      start_date: project.start_date,
      end_date: project.end_date,
    }

    const test = await createProject.mutateAsync(newProject)
    console.log(test.status)
    history.push('/dashboard')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setProjectState({
      ...project,
      [e.target.name]: e.target.value,
    })
    console.log(project)
  }

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setProjectState({
      ...project,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Update Project form</h5>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Project Name"
                  name="projectName"
                  value={project.projectName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={project.projectIdentifier}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  name="description"
                  value={project.description}
                  onChange={handleTextAreaChange}
                />
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="start_date"
                  value={project.start_date}
                  onChange={handleInputChange}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="end_date"
                  value={project.end_date}
                  onChange={handleInputChange}
                />
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProject
