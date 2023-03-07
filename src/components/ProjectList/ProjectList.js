import './ProjectList.css';
import projectData from '../Projects/projectData.json';
import ProjectTitles from '../Projects/ProjectTitles';

const ProjectList = ({ key, id, title, description, technologies, deployment, github, directory }) => {

  const ProjectTitlesMap = () => projectData.map((project) => (
    <ProjectTitles
      key={project.id}
      id={project.id}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      deployment={project.deployment}
      github={project.github}
      directory={project.directory}
    />
  ))

  return (
    <div className='project-list-container'>
    <h3>Projects</h3>
      <div>
      <ProjectTitlesMap
        key={id}
        id={id}
        title={title}
        description={description}
        technologies={technologies}
        deployment={deployment}
        github={github}
        directory={directory}

      />
      </div>
    </div>
  )
}

export default ProjectList;

//CODE GRAVEYARD
// const projectDetails = () => {
//   setProjectInfo({ key, id, title, description, technologies, deployed, github, directory})
// }


// return (
//   <Fragment>
//   <div  className='project-list-container'>
//   <h3>Projects</h3>
//     <div>
//       <Link to='/emotr'>
//         <p>Emotr</p>
//       </Link>
//       <Link to='/jesteer'>
//         <p>Jesteer</p>
//       </Link>
//       <Link to='/karuna-publications'>
//         <p>Karuna Publications</p>
//       </Link>
//       <Link to='/perfect-union'>
//         <p>A Perfect Union</p>
//       </Link>
//       <Link to='/song-seeking-devil-chicken'>
//         <p>Song Seeking Devil Chicken</p>
//       </Link>
//     </div>
//     </div>
//     <Outlet />
//   </Fragment>
// )
