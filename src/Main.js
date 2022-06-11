import React, { Component } from "react";
import { Route, HashRouter, Routes, useLocation, useHref } from "react-router-dom";
import './index.css'
import DrawerNavigation from "./DrawerNav/DrawerNavigation";
import BG from "./Background/bg";
import Welcome from "./0. Welcome Screen/welcome";
import CurrencyExchange from "./1. CurrencyExchange/CurrencyExchange";
import Loader from "./Loading screen/loading";
import Login from "./login/login";
import Lupapassword from "./Lupa Password/Lupapassword";
import Formpengiriman from "./Form Pengiriman Barang/Formpengiriman";
import Formpermintaan from "./Form Permintaan Barang/Formpermintaan";
import InformasiBarang from "./Informasi Barang/InformasiBarang";
import { AnimatePresence } from 'framer-motion'
//for axios-progress-bar
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import Formpembatalan from "./Form Pembatalan Barang/Formpembatalan";
import InformasiPerubahaan from "./Informasi Perubahan Stok/InformasiPerubahan";
import DaftarPemesanan from "./Daftar Pemesanan Barang/Daftarpemesanan";
import DaftarPembatalan from "./Daftar Pembatalan Pesanan/DaftarPembatalan";
import DaftarPermintaan from "./Daftar Permintaan Pengembalian/DaftarPermintaaan";
import DaftarGudang from "./Daftar Pemesanan Barang dari Gudang/DaftarGudang";
import Penggunabaru from "./Pengguna Baru/penggunaBaru";
import Ubahdata from "./Ubah Hapus Data/Ubahdata";
import Daftarpermintaan from "./Daftar Permintaan Barang/Daftarpermintaan";


class Main extends Component {

    constructor(props) {
        super();

        //Elemen React perlu disimpan di dalam suatu anonymous function.. 
        this.state = {
            //!!!!!!!!Kalau mau tes design, import componentnya dulu di atas!!!!!!!!!!!.
            //Lalu tambah elemen array di dalam menuList
            //ikut pola ini :
            //[path, url ikon, judul menu item, komponen yang akan dimunculkan]
            //utk bagian komponen pastikan menggunakan anon function. Tambahkan juga atribut ini, copas aja transitionVar={this.state.trasitionVariant} transition={this.state.transition}
            menuList: [
                ["/", "https://img.icons8.com/office/30/000000/cloud.png", "Welcome!", () => { return (<Welcome transitionVar={this.state.trasitionVariant} transition={this.state.transition} />) }],
                ["/currency", "https://img.icons8.com/office/30/000000/cloud.png", "Currency Convert", () => { return (<CurrencyExchange transitionVar={this.state.trasitionVariant} transition={this.state.transition} />) }],
                ["/loadtest", "https://img.icons8.com/office/30/000000/cloud.png", "Loading screen animation", () => { return (<Loader />) }],
                ["/login", "https://img.icons8.com/office/30/000000/cloud.png", "Login",() => <Login/>],
                ["/lupapassword", "https://img.icons8.com/office/30/000000/cloud.png", "Lupa Password",() => <Lupapassword/>],
                ["/formpengiriman", "https://img.icons8.com/office/30/000000/cloud.png", "Form Pengiriman Barang",() => <Formpengiriman/>],
                
                ["/formpembatalan", "https://img.icons8.com/office/30/000000/cloud.png", "Form Pembatalan Barang",() => <Formpembatalan/>],
                
                ["/informasiperubahan", "https://img.icons8.com/office/30/000000/cloud.png", "Informasi Perubahan Stok",() => <InformasiPerubahaan/>],
                [
                    "Informasi Gudang ",
                    [
                        ["/informasibarang", "https://img.icons8.com/office/30/000000/cloud.png", "Informasi Barang",() => <InformasiBarang/>],
                        ["/informasiperubahan", "https://img.icons8.com/office/30/000000/cloud.png", "Informasi Perubahan Stok",() => <InformasiPerubahaan/>],
                    ],
                    "https://img.icons8.com/office/30/000000/cloud.png"
                ],
                [
                    "Permintaan Barang ",
                    [
                        ["/formpermintaan", "https://img.icons8.com/office/30/000000/cloud.png", "Form Permintaan Barang",() => <Formpermintaan/>],
                        ["/daftarpemesanan", "https://img.icons8.com/office/30/000000/cloud.png", "Daftar Pemesanan barang",() => <DaftarPemesanan/>],
                    ],
                    "https://img.icons8.com/office/30/000000/cloud.png"
                ],
                
                ["/tambahpenggunabaru", "https://img.icons8.com/office/30/000000/cloud.png", "Tambah Pengguna Baru",() => <Penggunabaru/>],
                ["/ubahhapusdata", "https://img.icons8.com/office/30/000000/cloud.png", "Ubah Hapus Data Pengguna",() => <Ubahdata/>],
                ["/daftarpermintaanbarang", "https://img.icons8.com/office/30/000000/cloud.png", "Daftar Permintaan Barang",() => <Daftarpermintaan/>]
                
            ],
            //Kalau udah ditambah, reload webnya, klik menu item yg udh ditambah
            //jangan lupa hapus elemen menuList yang sudah dites tadi agar code tidak berantakkan x

            trasitionVariant: props.transitionVar, //tidak perlu diubah
            transition: props.transition, //tidak perlu diubah
            currentRole: props.role //ubah sesuai dgn role akun yang sedang login
        }
        loadProgressBar(); 
    }

    componentWillMount(){
        this.setMenuList(this.state.currentRole)
    }

    setMenuList(role){
        //Tiap role memiliki menu yang berbeda
        //Contoh penambahannya ada di dalam menuList dalam this.state di atas
        //[path, url ikon, judul menu item, komponen yang akan dimunculkan]
        //utk bagian komponen pastikan menggunakan anon function
        if(role === "pemilik"){
            this.setState({
                menuList: [

                ]
            })
        }
        else if (role === "supplier"){
            this.setState({
                menuList: [
                    
                ]
            })
        }
        else if (role === "gudang"){
            this.setState({
                menuList: [
                    
                ]
            })
        }
    }

    render() {
        //Ini penjelasan dari copilot. Iseng, tp mungkin berguna 
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
                                            if (Array.isArray(item[1])) {
                                                return item[1].map((item, index) => {
                                                    return <Route key={index} path={item[0]} element={item[3]()} />
                                                })
                                            } else {
                                                return (
                                                    <Route key={index} path={item[0]} element={item[3]()} />
                                                )
                                            }
                                        })
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

