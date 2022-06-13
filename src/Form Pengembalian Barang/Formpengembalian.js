import React, { Component } from "react";
import { motion } from 'framer-motion'
import './Formpengembalian.css'

//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class Formpengembalian extends Component {
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
               <h1 className="bold">Form Pengembalian Barang</h1>
               <div className="w-50">

                    <div className="container-input">
                        <span className="text4">ID Pengembalian Barang</span>
                        <input className="" placeholder="ID (Readonly)"></input>
                    </div>

                    <div className="container-input">
                        <span className="text4" >ID Pemesanan Barang</span>
                            <select className="select" >
                                <option value="ID" >ID</option>
                                <option value="ID">ID</option>
                            </select>
                    </div>

                    <div className="container-input">
                        <span className="text4">Detail Permintaan Barang</span>
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

                    <div className="text-right ">
                        <button className="bold1">Kirim Form</button>
                    </div>
                </div>  

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Formpengembalian;
