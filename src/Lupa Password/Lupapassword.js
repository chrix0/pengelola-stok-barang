import React, { Component } from "react";
import { motion } from 'framer-motion'
import './Lupapassword.css'

//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class Lupapassword extends Component {
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
               <h1 className="thin">Website Pengelola ABCDE</h1>
               <h2 className="bold">Nama Perusahaan</h2>
               <div className="w-50">
                    <div className="container-input">
                        <span className="text4">ID Karyawan</span>
                        <input className="input-id" placeholder="ID Karyawan"></input>
                    </div>
                    <div className="container-input">
                        <span className="prosedur">Prosedur : </span>
                            <ul>
                                <li>
                                        ID Karyawan akan dikirimkan ke pemilik perusahaan
                                </li>
                                <li>
                                        Password baru akan diinformasikan pemilik via Whatsapp
                                </li>
                            </ul>
                    </div>
                    
                    <div className="text-right ">
                        <button className="bold1">Kirim</button>
                    </div>
                </div>  

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Lupapassword;
