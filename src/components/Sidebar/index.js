import './index.scss'
import {Link, NavLink} from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/logo-s_ioana.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import LogoSubtitle from '../../assets/images/logo_sub_ioana.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faEnvelope, faHome, faLaptop, faLaptopCode, faSchool, faServer, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src = {LogoS} alt="logo"></img>
            <img className="sub-logo" src = {LogoSubtitle} alt="subtitlelogo"></img>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="education-link" to="/education">
                <FontAwesomeIcon icon={faBook} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faLaptopCode} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faServer} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel="noreferrer"
                href="https://www.linkedin.com/in/ioanaliviapopescu">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target="_blank" 
                rel="noreferrer"
                href="https://github.com/Ioana12iunie">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar