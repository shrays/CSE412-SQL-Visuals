import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'bar',
                            x: ['Nanyang Tech', 'HKU', 'KAIST'],
                            y: [90.4, 82, 88.1],
                            name: 'Academic Reputation'},
                        {type: 'bar',
                            x: ['Nanyang Tech', 'HKU', 'KAIST'],                            y: [76.1, 50.1, 85.8],
                            name: 'Employer Reputation'},
                        {type: 'bar',
                           x: ['Nanyang Tech', 'HKU', 'KAIST'],                            y: [100, 100, 23.1],
                            name: 'International Faculty Ratio'},
                        {type: 'bar',
                            x: ['Nanyang Tech', 'HKU', 'KAIST'],                            y: [74.1, 87.9, 12.3],
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