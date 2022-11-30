import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PieChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'pie',
                            labels: ['United States', 'United Kingdom', 'China', 'Japan', 'Russia'],
                            values: [201, 90, 71, 50, 48]}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'Top 5 Countries Represented in Rankings', paper_bgcolor:'#E4DCCF'}}
                />
            </div>
        )
    }
}
export default PieChart1;