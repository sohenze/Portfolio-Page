import {SidebarData} from '../data/SidebarData';
import {UserData} from '../data/UserData.jsx';

//Icons
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const mailto = 'mailto:' + UserData.email;

const Contact = () => {
    return (
        <div className='Contact'>
            <h2>Contact me here!</h2>
            <ul className='ContactList'>
                <li className='ContactRow' onClick={() => {window.location = mailto}}>
                    <AiOutlineMail size="2rem"/>&nbsp; {UserData.email}
                </li>
                <li className='ContactRow' onClick={() => {window.open(UserData.github, 'blank', 'noopener, noreferrer')}}>
                    <AiOutlineGithub size="2rem"/> &nbsp; Github
                </li>
                <li className='ContactRow' onClick={() => {window.open(UserData.linkedin, 'blank', 'noopener, noreferrer')}}>
                    <AiOutlineLinkedin size="2rem"/> &nbsp; Linkedin
                </li>
            </ul>
        </div>
    )
}

export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className='SidebarRow' onClick={() => window.location.replace(val.link)}> 
                            <div>
                                {val.title}
                            </div> 
                        </li>
                    )
                })}
            </ul>
            <Contact />
        </div>
    )
}
