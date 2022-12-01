import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart extends Component {
    render() {
        let SC1ranks = [1, 1, 1];
        let SC1overallScores = [100, 98, 43];
        let SC1universities = "Universities"

        return (
            <div>
                <Plot
                    data={[
                        {type: 'scatter',
                            x: SC1ranks,
                            y: SC1overallScores,
                            mode: 'markers',
                            text: SC1universities
                        }
                    ]}
                    layout={ { width: 1000, height: 500, title: 'Overall Score Distribution', 
                    paper_bgcolor:'#E4DCCF', plot_bgcolor:'#fffdfa', 
                    yaxis: {title: {text: 'University Rank'}},
                    xaxis: {title: {text: 'Overall University Score'},range:[500, 0]}}}
                />
            </div>
        )
    }
}
export default BarChart;