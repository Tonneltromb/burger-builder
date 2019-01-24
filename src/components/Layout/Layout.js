import React, {Component} from 'react';
import Aux from '../../hoc/AuxReact'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <div className={classes.Content}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Layout;