import React from 'react';
import Aux from '../../hoc/AuxReact'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div className={classes.Content}>
            {props.children}
        </div>
    </Aux>
);

export default layout;