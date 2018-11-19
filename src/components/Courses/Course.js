import React from 'react';
import courseCss from './Course.module.css';

const Course = (props) => {

    return(
        <div className = {courseCss.Course} onClick={() => props.click(props.count)}>
            <button><img className={courseCss.icon} src={"https://cdn1.iconfinder.com/data/icons/general-9/500/right_arrow-512.png"} />  Module {props.count}</button>
        </div>
    );
};

export default Course;
