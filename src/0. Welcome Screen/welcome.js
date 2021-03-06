import React, { Component } from "react";
//motion perlu diimport..
import { motion } from 'framer-motion'
import './welcome.css'

//Animasikan atribut opacity dari element <div> dengan menggunakan framer-motion
//Sehingga memberi efek fade in dan fade out

//Motion terdiri atas 3 atribut yaitu initial, animate, exit
//Tahapan ini akan menjadi seperti ini:
//1. initial: opacity: 0 (kondisi awal)
//2. animate: opacity: 1 (dari initial ke animate = 0 -> 1)
//3. exit: opacity: 0 (dari animate ke exit =  1 -> 0)


class Welcome extends Component {

    render() {
        return (
            <motion.div
                initial="init"
                animate="anim"
                exit="ex"
                transition={this.props.transition}
                variants={this.props.transitionVar}>

                <h1 className="text">👋</h1>
                <h1 className="text">Hello!</h1>
                <h3 className="text">Cek cara pengerjaannya di template.js di dlm folder TEMPLATE</h3>
                <h3 className="text">Usahakan bagian yg udh dipilih disiapkan dalam 1 minggu.</h3>
                <h3 className="text">Minggu depan tolong kerjakan tampilan sisanya.</h3>
                <h3 className="text">Thank you!</h3>
            </motion.div>
        )
    }
}

export default Welcome;
