import React, { Component } from 'react'
import SpartanLogo from '../static/images/spartan.png'

export class Logo extends Component {
    render() {
        return (
            <div>
                <img src={SpartanLogo} alt="spartan logo" />
            </div>
        )
    }
}

export default Logo