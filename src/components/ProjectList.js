import React from 'react';

const updateModal = (props) => {
    document.querySelector("body").classList.add("noScroll");
    props.callBack(props.project);
}

const ProjectList = (props) => {
    return (
        <div className='singleProject'>
            <img className='projectImage' src={props.project.image} alt={props.project.title}/>
            <div className="detailContainer">
                <div className='projectTitle'>{props.project.title}</div>
                <small className='projectDescription'>{props.project.description}</small>
                <button onClick={() => updateModal(props) }>Details</button>
            </div>
        </div>
    );
}

export default ProjectList;