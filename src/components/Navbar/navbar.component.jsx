import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Aboutme from '../Aboutme/aboutme.component';

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = ()=>{
    setVisible(!visible);
  }
  return (
<>
<header>
  <p onClick={()=>toggleVisibility()} className ="button-close text-center"> 
  { visible ? 
    <FontAwesomeIcon icon={faXmark} /> :
    <FontAwesomeIcon icon={faBars} />
  }
  </p>
 
  <nav className={`navbar ${visible ? 'open' : 'close' }`} >
  <ul className={'navbar-list'}>
    <li className='navbar-link'><Link to="#Home" className='nav-link active'>Home</Link></li>
    <li className='navbar-link'><Link to="#Resume" className='nav-link'>Resume</Link></li>
    <li className='navbar-link'><Link to="#Portfolio" className='nav-link'>Portfolio</Link></li>
    <li className='navbar-link'><Link to="#Contact me" className='nav-link'>Contact me</Link></li>
    <li className='navbar-link'><Link to="#about" className='nav-link'>About me</Link></li>
    <li className='navbar-link'><Link to="#certifications" className='nav-link'>Certifications</Link></li>
    <li className='navbar-link'><Link to="#certifications" className='nav-link'>Upwork</Link></li>
    <li className='navbar-link'><Link to="#certifications" className='nav-link'>SKILLS</Link></li>
    <li className='navbar-link'><Link to="#certifications" className='nav-link'>Testimonials</Link></li>
    <li className='navbar-link'><Link to="#certifications" className='nav-link'>Experiences</Link></li>
  </ul>

  </nav>
  
</header>

</>

  )
}

export default Navbar;

