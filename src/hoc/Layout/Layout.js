import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
                isAuth={this.props.isAuthenticated}
                drawerToggleClicked={this.sideDrawerToggleClicked} />
            <SideDrawer
                isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);