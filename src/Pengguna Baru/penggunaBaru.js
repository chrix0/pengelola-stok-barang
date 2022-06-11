import React, { Component } from "react";
import { motion } from 'framer-motion'
import './penggunaBaru.css'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineSortAscending} from 'react-icons/ai'


//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class Penggunabaru extends Component {
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
               <h1 className="bold">Tambah Pengguna Baru</h1>
               <div className="w-50">
                    <div className="container-input">
                        <span className="text4">Nama Lengkap</span>
                        <input className="nama-lengkap"/>
                    </div>
                    
                    <div className="container-input">
                        <span className="text4">Username</span>
                        <input className="username"/>
                    </div>
                    <div className="container-input">
                        <span className="text4">Password</span>
                        <input type="password" className="password"/>
                    </div>
                    <div className="container-input">
                        <span className="text4" >Role Pengguna</span>
                            <select className="select" >
                                <option value="role" >1</option>
                                <option value="role">2</option>
                            </select>
                    </div>
                    <div className="container-input">
                        <span className="text4">Nomor Telepon</span>
                        <input className="nomor-telepon"/>
                    </div>
                    <div className="text-center ">
                        <button className="bold1">Tambah Pengguna</button>
                    </div>

                </div>

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Penggunabaru;
