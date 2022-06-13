import React, { Component } from "react";
import { motion } from 'framer-motion'
import './Formpesanan.css'
import { FaSearch } from 'react-icons/fa'
import ListPemesanan from "./componen/listPemesanan";

//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class Formpesanan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            selectedRow: 0,
            ListPemesanan: [
                {
                    id: 1,
                    name: "Sabun",
                    stok: 10
                },
                {
                    id: 2,
                    name: "Shampoo",
                    stok: 5
                },
                {
                    id: 3,
                    name: "Lol",
                    stok: 10
                }
            ]
        };
    }
    selectTable(val){
        console.log(val)
        // if(!this.state.selectedRow){                
        //     selectedRow = val;
        //     selectedRow.style.backgroundColor = "red";
        // }else{
        //     selectedRow.style.backgroundColor = "";
        // }
        let selectedRow = val;
    }
    //..tambah method-method jika perlu

    render() {
        //Pastikan parentnya motion.div. JANGAN DIHAPUS, tapi boleh ditambah atributnya.
        //CSS si parent harus ada class center ya.

        //!!!!!!!!!!!!!
        //!!ATTENTION!!: TAMBAHKAN ID UNTUK ELEMEN-ELEMEN PENTING (MIS: BUTTON, TEXTBOX, COMBOBOX, DSB)
        //!!!!!!!!!!!!!
        return (
            <motion.div
                initial="init"
                animate="anim"
                exit="ex"
                transition={this.props.transition}
                variants={this.props.transitionVar}
                className='center wrapper-container'
            >
                <h1 className="bold">Form Pemesanan Barang</h1>
                <div className="w-50">

                    <div className="container-input">
                        <span className="text4">ID Permintaan Barang</span>
                        <input className="" placeholder="ID (Readonly)">
                        </input>
                    </div>

                    <div className="container-input">
                        <span className="text4">Barang yang diminta</span>
                        <div className="input-icons">
                            <i><FaSearch color="black" /></i>
                            <input className="input-field" onKeyUp={(e) => {
                                this.setState(state => {
                                    return {
                                        ...state,
                                        search: e.target.value.toLowerCase() ?? ""
                                    };
                                });
                            }} id="search" type="search" placeholder="Cari Barang" ></input>
                        </div>
                    </div>

                    <div className="container-input">
                        <table style={{ width: "100%", border: "1px solid #fff", color: "white" }}>
                            <thead>
                                <tr>
                                    <th>ID Barang</th>
                                    <th>Nama Barang</th>
                                    <th>Stok Barang</th>
                                </tr>
                            </thead>
                            <tbody id="dataBarang">
                                {
                                    this.state.ListPemesanan.map((item) => {
                                        if (item.name.toLowerCase().includes(this.state.search))
                                            return <tr onClick={(e) => this.selectTable(e)}>
                                                <td className="text-center">{item.id}</td>
                                                <td>{item.name}</td>
                                                <td className="text-center">{item.stok}</td>
                                            </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="text-right ">
                        <button>Tambah</button>
                    </div>
                    <div className="container-input">
                        <span className="text4">List Barang</span>
                        <ul className="w-full pl-5">
                            <ListPemesanan namaBarang="" />
                            <ListPemesanan namaBarang="" />
                            <ListPemesanan namaBarang="" />
                        </ul>
                    </div>
                    <div className="text-right ">
                        <button className="bold1">Kirim Form</button>
                    </div>
                </div>

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Formpesanan;
