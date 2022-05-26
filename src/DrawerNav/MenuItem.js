import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import './DrawerNav.css';

class MenuItem extends Component {
    render() {
        return (
            <div>
                <NavLink to={this.props.linkTo} className="removeTextDecoration" onClick={this.props.toggleDrawer}>
                    <div className="drawer_menuItem">
                        <div className="drawer_menuItem_icon">
                            <img src={this.props.iconURL} alt="icon" />
                        </div>
                        <div className="drawer_menuItem_text">
                            {this.props.text}
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default MenuItem;
