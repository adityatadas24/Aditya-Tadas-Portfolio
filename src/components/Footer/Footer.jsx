import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./style.css"
import BackTo from '../BackToTop/BackTo';
import Github from "/assets/github.svg"
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='d-flex justify-content-start align-items-center'>
           <div className='foot-icon'>
            <a href="https://www.linkedin.com/in/aditya-tadas-58a4b61ba/" target='_blank'> <LinkedInIcon/></a>
          
            {/* <img src={Github} /> */}
           </div>
           <div className='foot-icon'>
            <a href="https://github.com/adityatadas24" target='_blank'> <GitHubIcon /></a>
          
           {/* <img src={Github} /> */}
           </div>
        </div>
        <div>
            <BackTo/>
        </div>
      </div>
    </div>
  )
}

export default Footer
