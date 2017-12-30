import React, { Component } from 'react';

import Aux from '../../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        //Arrow function, so 'this' keyword refers to Layout class all time
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleClicked = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer };
        });
    }

    render() {
        return <Aux>
            <Toolbar
                drawerToggleClicked={this.sideDrawerToggleClicked} />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    }
}

export default Layout;