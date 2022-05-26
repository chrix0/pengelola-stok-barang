import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import './DrawerNav.css';
import MenuItem from "./MenuItem";


class DrawerNavigation extends Component {
    constructor(props) {
        super();
        //parameter props wajib ada jika ingin memasukkan nilai ke dalam state dalam constructor
        this.state = {
            drawerOpen: false,
            menuList: props.menuList
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = () => {
        var drawer = document.getElementById('drawers')
        var overlayBG = document.getElementById('overlayBG')
        var status = this.state.drawerOpen
        if (!status) {
            overlayBG.style.display = "block"
            overlayBG.classList.remove('w3-animate-opacity')
            drawer.classList.remove('slideAnimReverse')
            //offsetWidth digunakan untuk merender ulang halaman sehingga animasi dapat dijalankan walaupun button di klik berulang kali. 
            void drawer.offsetWidth;
            void overlayBG.offsetWidth;
            drawer.classList.add('slideAnim')
            overlayBG.classList.add('w3-animate-opacity')
            overlayBG.classList.add('darken')
            //drawer.style.left = "-25%"
        } else {
            overlayBG.style.display = "none"
            overlayBG.classList.remove('w3-animate-opacity')
            drawer.classList.remove('slideAnim')
            overlayBG.classList.remove('darken')
            void drawer.offsetWidth;
            void overlayBG.offsetWidth;
            drawer.classList.add('slideAnimReverse')
        }

        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    render() {
        return (
            <div>
                <div id="overlayBG" className="darkenPage" onClick={this.toggleDrawer}></div>
                <div className="drawer" id="drawers">
                    <div id="toggleDrawer" onClick={this.toggleDrawer}>
                        <img src="https://img.icons8.com/material-outlined/48/000000/menu--v1.png" alt="icon" />
                    </div>

                    <div className="drawer_content">

                        <div className="drawer_profile">
                            <h1 id="profile_name">
                                Chris Tianto Pratama
                            </h1>
                            <h2 id="profile_occupation">
                                Frontend Developer / UI/UX Designer / Freelancer
                                (Bachelor of Computer Science)
                                {"\n"}- Github copilot sepertinya memuji me
                            </h2>
                        </div>

                        <div className="drawer_menu">
                            <ul className="drawer_menuItemList">
                                {this.state.menuList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <MenuItem linkTo={item[0]} iconURL={item[1]} text={item[2]} toggleDrawer={this.toggleDrawer} />
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrawerNavigation;