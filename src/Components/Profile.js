import React from 'react';
import './index.css';
import ProfileImg from '../images/profilepic.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Profile() {
    return (
        <div>
            <div className="card">
                <div className="header-bg">
                    <div className="profilepic">
                        <img className="img-profilepic" src={ProfileImg} alt="profilepic" />
                    </div>
                    <div className="name-roll">
                        <div className='name'>Pavithr Jain</div>
                        <div className="professional">Web Developer</div>
                    </div>
                </div>
                <div className="about-section">
                    <div>
                        <h2 className="cv-header">About Me</h2>
                        <div className="about-display">
                            <div className="about-description">Hello! I am Pavithr Jain. I am passionate about UI/UX design and Web
                                Developer.
                                I
                                am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and
                                Sketch.
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="contact-section">
                    <div>
                        <h2 className="cv-header">Contact</h2>
                        <div className="contact-details">
                            <div>
                                <div className='contact-display'>
                                    <div className='contact-icons'>
                                        <WhatsAppIcon />
                                    </div>
                                    <div>
                                        +91 6303628188
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='contact-display'>
                                    <div className='contact-icons'>
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <a href="mailto:pavithrjain19@gmail.com" rel="noopener noreferrer" target='_blank'>Send mail</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='contact-display'>
                                    <div className='contact-icons'>
                                        <LinkedInIcon />
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/pavithr-jain/" rel="noopener noreferrer" target='_blank'>linkedin</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='contact-display'>
                                    <div className='contact-icons'>
                                        <GitHubIcon />
                                    </div>
                                    <div>
                                        <a href="https://github.com/Pavithrj" rel="noopener noreferrer" target='_blank'>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <hr />
                <div className="skills-section">
                    <div>
                        <h2 className="cv-header">Professional Skills</h2>
                    </div>
                    <div className="skills-details">
                        <div className="skills">
                            <div>HTML</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '95%' }}></div>
                            </div>
                            <div>CSS</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '85%' }}></div>
                            </div>
                            <div>JAVASCRIPT</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '70%' }}></div>
                            </div>
                            <div>REDUX</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '70%' }}></div>
                            </div>
                            <div>EXPRESS</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className="skills">
                            <div>REACT</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '80%' }}></div>
                            </div>
                            <div>NODE</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '70%' }}></div>
                            </div>
                            <div>MONGODB</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '70%' }}></div>
                            </div>
                            <div>TYPESCRIPT</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '60%' }}></div>
                            </div>
                            <div>UNIT TESTING</div>
                            <div className="skills-border">
                                <div className="skills-bg" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="work-section">
                    <div>
                        <h2 className="cv-header">Work Experience</h2>
                    </div>
                    <div className="work-details">
                        <div className="role-workplace">
                            <span className="work-role">Frontend Developer </span><span className="work-place">at Praise Array</span>
                        </div>
                        <div className="work-timeline">Feb 2023 - Present</div>
                        <div className="work-description">JavaScript frameworks to provide a robust synopsis for high level
                            overviews.</div>
                    </div>
                </div>
                <hr />
                <div className="project-section">
                    <div>
                        <h2 className="cv-header">Project Experience</h2>
                    </div>
                    <div className="project-details">
                        <div className='project-name'>
                            <b>Name: </b>Feedback management system
                        </div>
                        <div className='project-abstract'>
                            <div className='project-heading'>Abstract: </div>This project consisted of developing a generic platform to collect feedback from different types of clients.The clients are provided with an interface where they could design and customize their own feedback rating screen.
                        </div>
                        <div className='project-technologies'>
                            <div className='project-heading'>Technologies Incorporated: </div> React, SCSS, Node.js, Mongodb, Typescript.
                        </div>
                        <div className='project-roles-responsibilities'>
                            <div className='project-heading'>Roles and Responsibilities:</div>
                            <div>
                                -Designed and implemented the architecture on Node.js
                            </div>
                            <div>
                                -Implemented Rest endpoints in Express.
                            </div>
                            <div>
                                -Developed that rating tool application using angular.js.
                            </div>
                            <div>
                                -Handled authentication using passport module.
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="education-section">
                    <div>
                        <h2 className="cv-header">Education</h2>
                    </div>
                    <div className="education-details">
                        <div className="education-degree">
                            <span className="education-role">B.Tech in Information and Technology Engineering </span><span
                                className="education-place">from Guru Nanak Institute of Technology</span>
                            <div className="eduction-timeline">2018 - 2022</div>
                        </div>
                    </div>
                    <div className="education-details">
                        <div className="education-degree">
                            <span className="education-role">Science and Mathematics </span><span className="education-place">from Nava
                                Chaitanya Junior
                                College</span>
                        </div>
                        <div className="eduction-timeline">2016 - 2018</div>
                    </div>
                    <div className="education-details">
                        <div className="education-degree">
                            <span className="education-role">SCC </span><span className="education-place">from Oxford Grammar High
                                School</span>
                        </div>
                        <div className="eduction-timeline">2004 - 2016</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;


// Project: Feedback management system

// Abstract: This project consisted of developing a generic platform to collect feedback from different types of clients.The clients are provided with an interface where they could design and customize their own feedback rating screen.

// Technologies Incorporated – React, SCSS, Node.js, Mongodb, Typescript.

// Roles and Responsibilities
// -Designed and implemented the architecture on Node.js
// -Implemented Rest endpoints in Express.
// -Developed that rating tool application using angular.js.
// -Handled authentication using passport module.