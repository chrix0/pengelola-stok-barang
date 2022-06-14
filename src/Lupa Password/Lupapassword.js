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
                        <input className="" placeholder="ID Karyawan"></input>
                    </div>
                    <div className="container-input">
                        <span className="text4">OTP</span>
                        <span>
                            <input className="input2" placeholder="Nomor OTP"></input>
                            <button className="bold5">Kirim OTP Ke nomor Telepon Terkait</button>
                        </span>
                    </div>

                    <div className="container-input">
                        <span className="text4">Password Baru</span>
                        <input  type="password" className=""   placeholder="Password Baru"></input>   
                    </div>

                    <div className="text-right ">
                        <button className="bold1">Ubah Password</button>
                    </div>
                    
                    
                </div>  

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Lupapassword;
