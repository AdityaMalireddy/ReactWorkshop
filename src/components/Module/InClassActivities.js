import React from 'react';
import moduleCss from './ModuleConcepts.module.css';


const InClassActivity = (props) => {

    let content = [];

    for(let i=1; i<=props.inClassActivity; i++) {
        content.push(<div className={moduleCss.Module} key={i}>InClassActivity {i} </div>)
    }

    return(
        <div>
            {content}
        </div>
    );
};

export default InClassActivity;