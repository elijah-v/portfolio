import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Header from "./header"
import "./layout.css"
import Footer from '../components/Footer/footer'
import ProjectIndex from './ProjectIndex/ProjectIndex'

const Layout = ({ children }) => {
  const query = useStaticQuery(graphql`
  query {
  image1: file(relativePath: {eq:"football.png"}) {
      childImageSharp {
          fluid(maxWidth:1800) {
              ...GatsbyImageSharpFluid
          }
      }
  }

  image2: file(relativePath: {eq:"amazon.png"}) {
      childImageSharp {
          fluid(maxWidth:1800) {
              ...GatsbyImageSharpFluid
          }
      }
  }


  image3: file(relativePath: {eq:"tasks2.png"}) {
      childImageSharp {
          fluid(maxWidth:1800) {
              ...GatsbyImageSharpFluid
          }
      }
  }


  image4: file(relativePath: {eq:"kal.png"}) {
      childImageSharp {
          fluid(maxWidth:1800) {
              ...GatsbyImageSharpFluid
          }
      }
  }

  }

`)

  const url = typeof window.location.href !== 'undefined' ? window.location.hash:''
  

  return (

  <div className="project-container">
    <Header />
    <ProjectIndex url={url}/>
    <section id='project-page-1' className='project-page'>
      <div className='content' >
      <div className='text-container'>
      <h1>Football Site</h1>
      <h3>Tech Stack</h3>
      <p>React JS - Gatsby - JavaScript - HTML5 - CSS</p>
      <h3>Description</h3>
      <p>A football website</p>
      <div className='buttons-container'>
      <button><a href='https://cranky-hoover-104d1a.netlify.app/' rel='noreferrer' target='_blank'>Hosted Site</a></button>
      <button><a href='https://github.com/elijah-v/football-blog' rel='noreferrer' target='_blank'>Source Code</a></button>
      </div>
      </div>
      <div className='img-container'>
      <Img imgStyle={{objectFit:'contain',maxHeight:'90%'}} fluid={query.image1.childImageSharp.fluid} alt='football site' fadeIn/>
      </div>
      </div>
    </section>
    <section id='project-page-2' className='project-page'>
      <div className='content' >
      <div className='text-container'>
      <h1>Amazon Clone</h1>
      <h3>Tech Stack</h3>
      <p>React JS - JavaScript - HTML5 - CSS</p>
      <h3>Description</h3>
      <p>An E-commerce website with similar design to the Amazon website.</p>
      <div className='buttons-container'>
      <button><a href='https://e-commerce-65776.web.app' rel='noreferrer' target='_blank'>Hosted Site</a></button>
      <button><a href='https://github.com/elijah-v/e-commerce-project' rel='noreferrer' target='_blank'>Source Code</a></button>
      </div>
      </div>
      <div className='img-container'>
      <Img imgStyle={{objectFit:'contain',maxHeight:'90%'}} fluid={query.image2.childImageSharp.fluid} alt='amazon clone' fadeIn/>      </div>
      </div>
    </section>
    <section id='project-page-3' className='project-page'>
      <div className='content' >
      <div className='text-container'>
      <h1>Kal</h1>
      <h3>Tech Stack</h3>
      <p>React JS - JavaScript - HTML5 - CSS - API</p>
      <h3>Description</h3>
      <p>Kal allows to search for every food that you eat or plan to eat throughout the day and it will subtract the calories consumed from the maximum calories needed to achieve your target weight in the desired timeframe set in weeks.</p>
      <div className='buttons-container'>
      <button><a href='https://kal-1-2557e.web.app' rel='noreferrer' target='_blank'>Hosted Site</a></button>
      <button><a href='https://github.com/elijah-v/Kal' rel='noreferrer' target='_blank'>Source Code</a></button>
      </div>
      </div>
      <div className='img-container'>
      <Img imgStyle={{objectFit:'contain',maxHeight:'90%'}} fluid={query.image4.childImageSharp.fluid} alt='kal' fadeIn/>
      </div>
      </div>
    </section>
    <section id='project-page-4' className='project-page'>
      <div className='content' >
      <div className='text-container'>
      <h1>Tasks2</h1>
      <h3>Tech Stack</h3>
      <p>React JS - JavaScript - HTML5 - CSS</p>
      <h3>Description</h3>
      <p>Keep track of your weekly activities with a simple app.</p>
      <div className='buttons-container'>
      <button><a href='https://tasks2-4ae08.web.app' rel='noreferrer' target='_blank'>Hosted Site</a></button>
      <button><a href='https://github.com/elijah-v/Tasks2' rel='noreferrer' target='_blank'>Source Code</a></button>
      </div>
      </div>
      <div className='img-container'>
      <Img imgStyle={{objectFit:'contain',maxHeight:'100%'}} style={{ height: "100%", width: "100%", maxHeight: '35em'}} fluid={query.image3.childImageSharp.fluid} alt='tasks2' fadeIn/>
      </div>
      </div>
    </section>
    <section id='about' className='about-page'>
      <div className='content' >
      <div className='text-container about'>
      <h1 className='about-me-h1'>About</h1>
      <p className='about-me-p'>Although graduated as a medical doctor I have always been passionate about helping people to feel their best during the time we have in this world and saw the medical field as a way to do so. 
        <br/>Nevertheless, by the end of my studies I had a consolidated vision of the way I was going to fulfil my purpose. 
        To help develop fantastic experiences, allow businesses to connect better with their customers and carry out their functions, by adding value to businesses that solve real problems that affect people’s lives using software solutions as a mean to achieve those objectives. 

<br/>
<br/>
<br/>
I’m self motivated, have attention to detail and solid problem solving abilities. 
I value connecting with my team members and customers and want to work hard to help you deliver value to your customers in exchange of being part of a wonderful team that will help me learn to improve and move forward throughout my career.
</p>
      </div>
      </div>
    </section>
    <section id='resume' className='resume-page'>
      <div className='content' >
      <div className='text-container resume'>
      <h1>Resume</h1>
      <h3>Skills</h3>
      <ul className='skills-ul'>
        <li className='skills-li'><p>JavaScript</p></li>
        <li className='skills-li'><p>HTML5</p></li>
        <li className='skills-li'><p>CSS/SCSS</p></li>
        <li className='skills-li'><p>React JS</p></li>
      </ul>
      <h3>Education</h3>
      <p>Graduated as a Medical Doctor from the Central University of Venezuela in 2018.</p>
      </div>
      </div>
    </section>
    <section id='contact' className='contact-page'>
      <div className='content' >
      <div className='text-container'>
      <h1>Contact me</h1>
      <p>eliasvival@hotmail.com</p>
      <p>7307 368868</p>
      </div>
      </div>
    </section>
    <Footer />
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*







*/