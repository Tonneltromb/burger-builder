import React from 'react';
import Aux from '../../hoc/AuxReact'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div className={classes.Content}>
            {props.children}
        </div>
    </Aux>
);

export default layout;