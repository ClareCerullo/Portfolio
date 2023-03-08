import { Link } from 'react-router-dom';

const Project = ({ key, id, title, description, technologies, deployment, github, directory, projects, setProjects, projectDetails, setProjectDetails }) => {

  return (
    <div className="project-container" key={id}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{technologies}</p>
      <p><Link to={deployment} target='_blank'>Deployed</Link></p>
      <p><Link to={github} target='_blank'>Github Repository</Link></p>
    </div>
  )
}

export default Project;