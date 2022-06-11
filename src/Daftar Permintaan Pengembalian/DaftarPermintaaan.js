import React, { Component } from "react";
import { motion } from 'framer-motion'
import './DaftarPermintaan.css'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineSortAscending} from 'react-icons/ai'


//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class DaftarPermintaan extends Component {
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
               <h1 className="bold">Daftar Permintaan Pengembalian</h1>
               <div className="w-50">
               <div className="container-input">
                        <span>
                            <input className="input-id" placeholder="ID Pengembalian"></input>
                            <FaSearch className="icon1"/>
                            <AiOutlineSortAscending className="icon2"/>
                        </span>  
                    </div>

                    <div className="container-input">
                        <span >Daftar Permintaan</span>
                        <div className="container-input">
                        <table  style={{width:"100%", border:"1px solid #fff" ,color:"white"}}>
                        <tr>
                            <th>
                                Nama Barang
                            </th>
                            <th>
                                Stok Barang
                            </th>
                            <th>
                                ID Barang
                            </th>
                        </tr>
                        <tr>
                            <td>
                                rokok
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                10000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                rokok
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                10000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                rokok
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                10000
                            </td>
                        </tr>
                        </table>
                    </div>
                    </div>
                    <div className="container-input">
                        <span>
                            <input className="input-id" placeholder="Cari Barang Berdasarkan ID"></input>
                            <FaSearch className="icon1"/>
                            <AiOutlineSortAscending className="icon2"/>
                        </span>  
                    </div>
                    <div className="container-input">
                        <span >Daftar Barang Dari  Permintaan</span>
                        <div className="container-input">
                        <table  style={{width:"100%", border:"1px solid #fff" ,color:"white"}}>
                        <tr>
                            <th>
                                Nama Barang
                            </th>
                            <th>
                                Stok Barang
                            </th>
                            <th>
                                ID Barang
                            </th>
                        </tr>
                        <tr>
                            <td>
                                rokok
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                10000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                rokok
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                10000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                rokok
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                10000
                            </td>
                        </tr>
                        </table>
                    </div>
                    </div>

                    
                </div>  

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default DaftarPermintaan;
