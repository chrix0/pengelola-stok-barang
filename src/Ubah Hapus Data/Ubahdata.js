import React, { Component } from "react";
import { motion } from 'framer-motion'
import './Ubahdata.css'
import {FaSearch} from 'react-icons/fa'
//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class Ubahdata extends Component {
    constructor(props){
        super();
        //... (tambah sesuai kebutuhan)
    }

    //..tambah method-method jika perlu

    render(){
        //Pastikan parentnya motion.div. JANGAN DIHAPUS, tapi boleh ditambah atributnya.
        //CSS si parent harus ada class center ya.

        //!!!!!!!!!!!!!
        //!!ATTENTION!!: TAMBAHKAN ID UNTUK ELEMEN-ELEMEN PENTING (MIS: BUTTON, TEXTBOX, COMBOBOX, DSB)
        //!!!!!!!!!!!!!
        return(
            <motion.div
                initial="init"
                animate="anim"
                exit="ex"
                transition={this.props.transition}
                variants={this.props.transitionVar}
                className='center wrapper-container '
            >
               <h1 className="bold">Form Pengiriman Barang</h1>
               <div className="w-50">

                    <div className="container-input">
                        <span>
                            <input className="input-nama" placeholder="Nama Pengguna"></input>
                            <FaSearch className="icon1"/>
                        </span>  
                    </div>

                    <div className="container-input">
                        <span className="saring-data" >Saring Data Berdasarkan
                            <select className="select" >
                                <option value="ID" >Role Pengguna</option>
                                <option value="ID">ID</option>
                            </select>
                        </span>
                    </div>

                    <div className="container-input">
                        <span className="text4">Daftar Pengguna</span>
                        <textarea cols="40" rows="5"></textarea>
                    </div>

                    

                    <table>
                        <tr>
                            <td className="frans">ID Karyawan   </td>
                            <td >: ----</td>
                        </tr>
                        <tr>
                            <td className="frans">Nama</td>
                            <td>: <input type="text" size={10}></input></td>
                        </tr>
                        <tr>
                            <td className="frans">No. Telp</td>
                            <td>: <input type="text" size={10}></input></td>
                        </tr>
                        <tr>
                            <td className="frans">Password</td>
                            <td>: <input type="password" size={10}></input></td>
                        </tr>

                    </table>

                    <div className="button">
                        <button className="bold3">Ubah Data</button>
                        <button className="bold2">Hapus Data</button>
                    </div>


                </div>  

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Ubahdata;
