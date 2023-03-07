import { Link } from 'react-router-dom'

const ProjectTitles = ({ key, id, title, description, technologies, deployment, github, directory, projects, setProjects, projectDetails, setProjectDetails }) => {
  const getProjectDetails = () => {
    setProjectDetails({ title, description, technologies, deployment, github })
  }

  return (
    <div>
      <Link to={`/${directory}`} onClick={getProjectDetails}>
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default ProjectTitles;