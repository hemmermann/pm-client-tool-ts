import React from 'react'
import { useParams } from 'react-router';

type Project = {
  projectName: string,
  projectIdentifier: string,
  description: string,
  start_date: string,
  end_date: string
}

const UpdateProject = () => {

  const project: Project  = {
    projectName: "test project",
    projectIdentifier: "tst1",
    description: "description",
    start_date:"2001-02-15",
    end_date:"2001-03-15",
  }

  const id = useParams();
  
  console.log(id)

  const handleSubmit = () => {

  }

  const handleInputChange = () => {

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
                  disabled
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  name="description"
                  value={project.description}
                  onChange={handleInputChange}
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

export default UpdateProject
