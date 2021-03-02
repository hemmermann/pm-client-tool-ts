import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import CreateProjectButton from './project/CreateProjectButton'
import Project from './project/data/Project'
import ProjectItem from './project/ProjectItem'

const fetchProjects = async () => {
  const res = await axios.get<Array<Project>>(
    'http://localhost:8778/api/project'
  )
  return res
}

const Dashboard = () => {
  const { data } = useQuery('fetchProjects', fetchProjects)

 let projects: Project[] = []
  if(data?.data){
      projects = data.data
  }

  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">Projects</h1>
            <br />
            <CreateProjectButton />
            <br />
            <hr />
            {
                projects.map(project => {
                 return  <ProjectItem key={project.id} project={project} />
                })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
