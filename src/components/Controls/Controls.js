import React, { Component } from 'react'
import Sliders from './Sliders'
import LoanButton from './buttons'
import './controls.css'

export default class Controls extends Component {
    render() {
        return (
            <div className="controls">

                <LoanButton />

                <Sliders />


      </div>
        )
    }
}
