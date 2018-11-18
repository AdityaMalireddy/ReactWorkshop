import React from 'react';
import moduleCss from './ModuleConcepts.module.css';

const Chapter = (props) => {
    return(
        <div>
            {props.concept.map((key, index) => {
                return <li className={moduleCss.Module} onClick={()=>props.onClick(key)}  key={index}>Concept {props.module}.{index}: {key}</li>
                })
            }
        </div>
    );
}



export default Chapter;