import React, { Component } from "react";
import { motion } from 'framer-motion'
import './Bantuanpengguna.css'
import {AiOutlineDown} from 'react-icons/ai'


//Ubah nama class dengan nama file js. Jangan buat nama class yg sama dgn yg udh ada.
class Bantuanpengguna extends Component {
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
               <h1 className="bold">Bantuan Pengguna</h1>
               <div className="collapse collapse-arrow w-full mb-4">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium bg-slate-200 text-black">
                        Pertanyaan 1
                    </div>
                    <div className="collapse-content bg-slate-400 mt-1 w-11/12 ml-auto"> 
                        <p className="py-2">Jawaban 1</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow w-full mb-4">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium bg-slate-200 text-black">
                        Pertanyaan 2
                    </div>
                    <div className="collapse-content bg-slate-400 mt-1 w-11/12 ml-auto"> 
                        <p>Jawaban 2</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow w-full mb-4">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium bg-slate-200 text-black">
                        Pertanyaan 1
                    </div>
                    <div className="collapse-content bg-slate-400 mt-1 w-11/12 ml-auto"> 
                        <p className="py-2">Jawaban 1</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow w-full mb-4">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium bg-slate-200 text-black">
                        Pertanyaan 1
                    </div>
                    <div className="collapse-content bg-slate-400 mt-1 w-11/12 ml-auto"> 
                        <p className="py-2">Jawaban 1</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow w-full mb-4">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium bg-slate-200 text-black">
                        Pertanyaan 1
                    </div>
                    <div className="collapse-content bg-slate-400 mt-1 w-11/12 ml-auto"> 
                        <p className="py-2">Jawaban 1</p>
                    </div>
                </div>
            <hr color="white" className="w-full border-2"/>
            <div className="text-left w-full">
                ada Pertanyaan lain? Silahkan masukkan pertanyaan anda dibawah ini.
            </div>
            <input type="text" placeholder="" className="h-min input w-full bg-white text-black rounded-none text-lg py-2 mt-2" />
            
            <button className="btn ml-auto mt-2 rounded-none bg-white text-black hover:bg-white"> Kirim <br/>Pertanyaan</button>

            </motion.div>
        )
    }

}

//Jangan lupa diexport classnya !!
export default Bantuanpengguna;
