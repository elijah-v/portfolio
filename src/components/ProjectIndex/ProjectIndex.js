import React from 'react'
import { Link } from 'gatsby'

import './ProjectIndex.css'

const ProjectIndex = ({url}) => {
    console.log(url)

    const handleClick = (clicked)=>{
        console.log(clicked)
    }
    return (
        <>
        <div className='project-index-container'>
        <ul className='ul-index'>
        <Link onClick={e=>handleClick(1)} className='index-link' to='#project-page-1'><li 
        className={`li-index ${url === '#project-page-1' ? 'on-index':''}`}>1</li></Link>
        <Link onClick={e=>handleClick(2)} className='index-link' to='#project-page-2'><li 
        className={`li-index ${url === '#project-page-2' ? 'on-index':''}`}>2</li></Link>
        <Link onClick={e=>handleClick(3)} className='index-link' to='#project-page-3'><li 
        className={`li-index ${url === '#project-page-3' ? 'on-index':''}`}>3</li></Link>
        <Link onClick={e=>handleClick(4)} className='index-link' to='#project-page-4'><li 
        className={`li-index ${url === '#project-page-4' ? 'on-index':''}`}>4</li></Link>
        </ul>
        </div>
        </>
    )
}

export default ProjectIndex