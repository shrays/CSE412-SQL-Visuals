import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'scatter',
                            x: SC2academicReputation,
                            y: SC2overallScores,
                            mode: 'markers',
                            text: SC2universities}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'Overall Score vs Academic Reputation Score', paper_bgcolor:'#E4DCCF', plot_bgcolor:'#fffdfa',yaxis: {title: {text: 'Academic Reputation'}},
                    xaxis: {title: {text: 'Overall University Score'}},
                }}
                />
            </div>
        )
    }
}
export default BarChart;