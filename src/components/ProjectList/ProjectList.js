import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './ProjectList.css'

const ProjectList = () => {
  return (
    <Fragment>
    <div  className='project-list-container'>
    <h3>Projects</h3>
      <div>
        <Link to='/emotr'>
          <p>Emotr</p>
        </Link>
        <Link to='jesteer'>
          <p>Jesteer</p>
        </Link>
        <Link to='/karuna-publication'>
          <p>Karuna Publications</p>
        </Link>
        <Link to='/perfect-union'>
          <p>A Perfect Union</p>
        </Link>
        <Link to='/song-seeking-devil-chicken'>
          <p>Song Seeking Devil Chicken</p>
        </Link>
      </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default ProjectList;