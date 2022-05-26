import React, { Component } from "react";
import { motion } from 'framer-motion'
import './CE.css'
import axios from 'axios'
import ReactDOM, { findDOMNode, unmountComponentAtNode } from 'react-dom';
import Loader from '../Loading screen/loading.js'
let cancelSource

class CurrencyExchange extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            currency: [],
            currencyFrom: '',
            currencyTo: '',
            currencyFromValue: '',
            currencyToValue: '',
            resultObj: {}
        }

        cancelSource = axios.CancelToken.source();
        this.getResult = this.getResult.bind(this);
        this.getResultOnFromAmountChange = this.getResultOnFromAmountChange.bind(this);

        this.loadingRef = React.createRef();
    }

    componentDidMount() {
        axios
            .get('https://api-exchange-rates.herokuapp.com/list-currency', {
                cancelToken: cancelSource.token,
                onDownloadProgress: (progressEvent) => {
                    var percentage = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    console.log(percentage);
                    if (percentage === 100) {
                        setTimeout(() => {
                            this.setState({
                                isLoading: false
                            })
                        }, 1000)
                    }
                }
            })
            .then(res => {
                this.setState({
                    currency: res.data.data.results
                })
            })
            .catch(err => {
                console.log(err)
            })

        setTimeout(() => {
            this.getResult()
        }, 1200)
    }

    componentWillUnmount() {
        if (cancelSource) {
            cancelSource.cancel("Proses get axios tiba-tiba dihentikan. Mungkin karena pindah menunya terlalu cepat..");
        }
    }

    getResult() {
        let from = document.getElementById('from')
        let to = document.getElementById('to')
        if (from.value === '' || to.value === '') {
            return
        }
        let url = `https://api-exchange-rates.herokuapp.com/calculator?from=` + from.value + `&to=` + to.value + `&amount=` + 1
        axios
            .get(url,
                {
                    cancelToken: cancelSource.token
                }
            )
            .then(
                res => {
                    this.setState({
                        resultObj: res.data.data
                    })
                    console.log(this.state.resultObj)
                    let infoOneCurr = document.getElementById('infoOneCurr')
                    let show = `${this.state.resultObj.fromResult} = ${this.state.resultObj.toResult}`
                    ReactDOM.render(show, infoOneCurr)
                }
            )

        this.getResultOnFromAmountChange()
    }

    getResultOnFromAmountChange() {
        let fromAmount = document.getElementById('fromAmount')
        let toAmount = document.getElementById('toAmount')
        let from = document.getElementById('from')
        let to = document.getElementById('to')
        let url = `https://api-exchange-rates.herokuapp.com/calculator?from=` + from.value + `&to=` + to.value + `&amount=` + fromAmount.value

        if (from.value === '' || to.value === '') {
            return
        }
        else if (fromAmount.value === '') {
            toAmount.value = ''
        } else {
            axios
                .get(url, {
                    cancelToken: cancelSource.token
                })
                .then(
                    res => {
                        this.setState({
                            resultObj: res.data.data
                        })
                        toAmount.value = this.state.resultObj.toResult
                    }
                )
        }
    }

    render() {
        //Selama finishedLoad = false, tampilkan loading screen
        return (
            <motion.div
                initial="init"
                animate="anim"
                exit="ex"
                transition={this.props.transition}
                variants={this.props.transitionVar}
                className='center'
            >
                {
                    this.state.isLoading ?
                        <Loader ref={this.loadingRef} />
                        :
                        <div className="container" id="CEcontent">
                            <div className="container-content">
                                <div className="currencyFormArea">
                                    <input id="fromAmount" type="text" placeholder="Enter amount" className="fullHeight" onChange={this.getResultOnFromAmountChange} />
                                    <select id="from" className="curr fullHeight" onChange={this.getResult}>
                                        <option style={{ display: 'none' }} value="" >Select currency</option>
                                        {
                                            this.state.currency.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.currCode}>{item.currCode} - {item.currName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="currencyFormArea downEmoji">⬇️</div>
                                <div className="currencyFormArea">
                                    <input id="toAmount" type="text" placeholder="0" className="fullHeight" disabled />
                                    <select id="to" className="fullHeight" onChange={this.getResult}>
                                        <option style={{ display: 'none' }} value="" >Select currency</option>
                                        {
                                            this.state.currency.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.currCode}>{item.currCode} - {item.currName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <h2 id="infoOneCurr">
                                </h2>
                            </div>
                        </div>
                }
            </motion.div >
        )
    }
}

export default CurrencyExchange;
