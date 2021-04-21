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

    // Set initial State on startup
    componentDidMount(){
        this.setState({      
            term:2,
            interest:7,
            amount:10000
        },()=> this.props.updateData(this.state.term,this.state.amount,this.state.interest,this.state.loanType))
    }

    componentDidUpdate(pP,pS,sS){
        if(pS.loanType !== this.state.loanType){
            this.props.updateData(this.state.term,this.state.amount,this.state.interest,this.state.loanType)
            
        }
    }
   
    

    // change methods set state from child and send state to parent with updateData prop.
    changeAmount = amount => this.setState({
        amount
    },()=> this.props.updateData(this.state.term,this.state.amount,this.state.interest,this.state.loanType))

    changeTerm = term => this.setState({
        term
    },()=> this.props.updateData(this.state.term,this.state.amount,this.state.interest,this.state.loanType))

    changeInterest = interest => this.setState({
        interest
    },()=> this.props.updateData(this.state.term,this.state.amount,this.state.interest,this.state.loanType))
    

//Sets max values and loantype string to parent (App.js) to be sent to Display component for consumption
    loanPreset(termMax,interestMax,loanType){
        this.setState({
            termMax,
            interestMax,
            loanType
        })
    }


    render() {
        return (
            <div className="controls">

                <LoanButton presets={this.loanPreset} />

                <Sliders data={this.state} sliderValue={this.sliderValue} changeAmount={this.changeAmount} changeTerm={this.changeTerm} changeInterest={this.changeInterest}/>


      </div>
        )
    }
}
