import React, { Component } from 'react'
import Sliders from './Sliders'
import LoanButton from './buttons'
import './controls.css'

export default class Controls extends Component {
    constructor(){
        super();
        this.state = {
            termMax:Number,
            interestMax:Number,
            term:0,
            interest:0,
            loanType:String,
            amount:0
        }
        this.loanPreset = this.loanPreset.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
        this.changeTerm = this.changeTerm.bind(this)  
        this.changeInterest = this.changeInterest.bind(this)      
    }

   
    changeAmount = amount => this.setState({
        amount
    },()=> this.props.updateData(this.state.term,this.state.amount,this.state.interest))

    changeTerm = term => this.setState({
        term
    },()=> this.props.updateData(this.state.term,this.state.amount,this.state.interest))

    changeInterest = interest => this.setState({
        interest
    },()=> this.props.updateData(this.state.term,this.state.amount,this.state.interest))
    


    loanPreset(termMax,interestMax,loanType){
        this.setState({
            termMax,
            interestMax,
            loanType
        },() => this.props.updateLoanType(this.state.loanType))
    }


    render() {
        return (
            <div className="controls">

                <LoanButton presets={this.loanPreset}/>

                <Sliders data={this.state} sliderValue={this.sliderValue} changeAmount={this.changeAmount} changeTerm={this.changeTerm} changeInterest={this.changeInterest}/>


      </div>
        )
    }
}
