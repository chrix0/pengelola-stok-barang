import { Component } from "react/cjs/react.production.min";
import './loading.css'
class Loader extends Component {
    render() {
        //spinning animation
        return (
            <div className="loading">
                <div className="loadmain hvcenter">
                    <div className="loadload hvcenter">
                        <div className="loadcontainer hvcenter">
                            <div className="box hvcenter"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader;