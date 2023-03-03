import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Logo } from './../../CC_LOGO.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo' to='/'>
          <Logo className='logo__fill'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='mailto:clare.cerullo@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link className='nav-link' to='https://www.linkedin.com/in/clarecerullo/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link className='nav-link' to='https://github.com/ClareCerullo'>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
        </div>
      <Outlet />
    </Fragment>
  )
}

export default NavBar;