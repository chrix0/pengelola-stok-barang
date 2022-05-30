//Copy & paste folder ini, lalu rename folder, css, dan js sesuai dgn yg akan dibuat


//Tiga2 ini wajib diimport
//Kalau mau tambah yg lain boleh ya. Tambah library baru jg ok.
import React, { Component } from "react";
import { motion } from 'framer-motion'
import './template.css' //Sesuaikan sama nama css di dalam folder

//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class Template extends Component {
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
                className='center'
            >
                {/*DESIGN UI DI DALAM MOTION.DIV .. HAPUS BARIS INI SEBELUM MULAI. THANKS*/}
            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Template;

//Untuk testing cek caranya di Main.js