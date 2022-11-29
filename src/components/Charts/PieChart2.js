import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PieChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'pie',
                            labels: ['India', 'China', 'United States', 'Poland', 'Russia', 'Japan', 'Denmark', 'Czech Republic'],
                            values: [16, 15, 10, 9, 9, 6, 6, 5]}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'Most Tech Schools', paper_bgcolor:'#F0EBE3'}}
                />
            </div>
        )
    }
}
export default PieChart1;