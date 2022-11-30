import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'bar',
                            x: ['Monash University', 'Brown University', 'Aalto University'],
                            y: [87, 57, 44],
                            name: 'Academic Reputation'},
                        {type: 'bar',
                            x: ['Monash University', 'Brown University', 'Aalto University'],                            
                            y: [80, 54, 45],
                            name: 'Employer Reputation'},
                        {type: 'bar',
                           x: ['Monash University', 'Brown University', 'Aalto University'],                            
                           y: [100, 82, 94],
                            name: 'International Faculty Ratio'},
                        {type: 'bar',
                            x: ['Monash University', 'Brown University', 'Aalto University'],                            
                            y: [100, 49, 35],
                            name: 'International Student Ratio'} 
                        ]}
                    layout={ { width: 1000, height: 500, title: 'University Comparison', paper_bgcolor:'#E4DCCF', plot_bgcolor:'#fffdfa',yaxis: {title: {text: 'Score'}},
                }}
                    // plot_bgcolor:"gray", paper_bgcolor:"orange"
                />
            </div>
        )
    }
}
export default BarChart1;