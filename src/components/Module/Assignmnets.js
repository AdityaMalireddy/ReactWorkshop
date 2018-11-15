import React from 'react';
import moduleCss from './ModuleConcepts.module.css';


const Assignment = (props) => {
    return(
        <div>
            {props.assignments.map((key,index) => {
                return <li className = {moduleCss.Module} key={index}>Assignment 0{index+1}: {key}</li>
            })}
        </div>
    );
};

export default Assignment;