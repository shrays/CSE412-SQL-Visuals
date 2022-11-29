import React, { Component } from 'react';
import Plot from 'react-plotly.js';

console.log("hi")
class BarChart extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'scatter',
                            x: [72, 77, 45, 47, 54, 76, 45, 67, 46, 58, 60, 68, 50, 61, 53, 45, 70, 71, 78, 53, 72, 58, 55, 67, 56, 65, 47, 59, 66, 74, 46, 54, 67, 49, 58, 79, 54, 67],
                            y: [62, 61, 75, 78, 48, 58, 74, 69, 53, 67, 48, 51, 70, 57, 48, 75, 73, 59, 72, 76, 67, 61, 56, 65, 55, 79, 69, 68, 55, 48, 74, 47, 50, 69, 58, 49, 47, 45],
                            mode: 'markers'}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'bar chart'}}
                />
            </div>
        )
    }
}
export default BarChart;