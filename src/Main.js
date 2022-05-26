import React, { Component } from "react";
import { Route, HashRouter, Routes, useLocation } from "react-router-dom";
import './index.css'
import DrawerNavigation from "./DrawerNav/DrawerNavigation";
import BG from "./Background/bg";
import Welcome from "./0. Welcome Screen/welcome";
import CurrencyExchange from "./1. CurrencyExchange/CurrencyExchange";
import Loader from "./Loading screen/loading";
import { AnimatePresence } from 'framer-motion'
//for axios-progress-bar
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

class Main extends Component {

    constructor(props) {
        super();

        //Elemen React perlu disimpan di dalam suatu anonymous function.. 
        this.state = {
            menuList: [
                ["/", "https://img.icons8.com/office/30/000000/cloud.png", "Welcome!", () => { return (<Welcome transitionVar={this.state.trasitionVariant} transition={this.state.transition} />) }],
                ["/currency", "https://img.icons8.com/office/30/000000/cloud.png", "Currency Convert", () => { return (<CurrencyExchange transitionVar={this.state.trasitionVariant} transition={this.state.transition} />) }],
                ["/loadtest", "https://img.icons8.com/office/30/000000/cloud.png", "Loading screen animation", () => { return (<Loader />) }],
            ],
            trasitionVariant: props.transitionVar,
            transition: props.transition
        }
        //axios-progress-bar digunakan untuk menampilkan progress bar saat proses request dari server
        loadProgressBar(); //Hanya dipanggil sekali saja, sudah mencakup semua request.
    }

    render() {
        //HashRouter is used to make the page refresh when the user navigates to a different page
        //NavLink is used to make the page refresh when the user clicks on a menu item
        //Route is used to make the page refresh when the user clicks on a menu item

        //HashRouter memiliki atribut basename yang digunakan untuk mengatur path awal yang akan digunakan
        /*
        Route memiliki atribut path yang digunakan untuk menentukan path yang akan digunakan,
        dan atribut element yang digunakan untuk menampilkan isi halaman. Sejak React 16.3.0, 
        elemen Route harus diletakkan di dalam elemen Routes / Switch. Pada versi sebelumnya, Route
        tidak perlu diletakkan di dalam Routes atau Switch. */

        //Untuk transisi, kita perlu menggunakan AnimatePresence yang berasal dari framer-motion
        //AnimatePresence akan memeriksa apakah elemen yang ditampilkan sudah ada di dalam DOM atau belum.
        //Dalam hal ini, AnimatePresence memeriksa apakah route telah berganti atau belum.
        //Agar AnimatePresence dapat berjalan, parent setiap page harus menggunakan motion.div

        //Atribut exitBeforeEnter digunakan untuk menjalankan animasi exit sebelum animasi enter dilakukan.
        //Singkatnya, atribut exit dapat dijalankan dengan exitBeforeEnter. Namun, masih ada lagi yang perlu dilakukan.
        //useLocation dari react-router-dom digunakan untuk mengambil lokasi URL sekarang.
        //Kita masukkan location tersebut dam sebuah key ke dalam Routes sehingga AnimatePresence bisa mengetahui kapan animasi exit ditrigger.

        //Custom hook untuk mengambil location
        //Custom hook harus diawali dengan kata use

        const useThis = () => {
            const location = useLocation();
            const pathname = location.pathname;
        }

        return (
            <div>
                <HashRouter>
                    <div>
                        <DrawerNavigation menuList={this.state.menuList} />
                        <BG />
                        <AnimatePresence exitBeforeEnter>
                            <div className="content whitetext" >
                                <Routes location={useThis.location} key={useThis.pathname}>
                                    {
                                        this.state.menuList.map((item, index) => {
                                            return (
                                                <Route key={index} path={item[0]} element={item[3]()} />
                                            )
                                        }
                                        )
                                    }
                                </Routes>
                            </div>
                        </AnimatePresence>
                    </div>
                </HashRouter>
            </div>
        )
    }
}


export default Main;

