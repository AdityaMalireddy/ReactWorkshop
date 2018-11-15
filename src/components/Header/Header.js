import React from 'react';
import header from './Header.module.css';

const Header = (props) => {
    return(
        <div className={header.Header}>
            <p>{props.value}</p>
        </div>
    );
};

export default Header;