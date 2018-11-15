import React from 'react';
import moduleCss from './ModuleConcepts.module.css';


const Quiz = (props) => {
    return(
        <div>
            {props.quizes.map((key, index) => {
                return <li className = {moduleCss.Module} key = {index}>Quiz {index+1}: {key}</li>
            })}
        </div>
    );
};

export default Quiz;