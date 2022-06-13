import React, { Component } from "react";

class ListPemesanan extends Component {
    constructor(props){
        super();
    }

    render(){
        return <li className="mb-2">
                {this.props.namaBarang}
                <div className="float-right">
                    Jumlah: <input type="text" size={10}></input>
                </div>
            </li>
    }
}

export default ListPemesanan;