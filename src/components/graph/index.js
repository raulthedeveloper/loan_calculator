import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';


class DoughnutChart extends Component{
   

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        
      }

    render(){
        return (
            <div className="chart">

                <Doughnut
                    data={this.props.chartData}
                    options={{
                        responsive:true,
                        maintainAspectRatio:false,
                        title:{
                        display:this.props.displayTitle,
                        text:this.props.location,
                        fontSize:25,
                        responsive:true
                        },
                        legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                        }
                    }}
        />

        
            </div>
        )
    }
}


export default DoughnutChart