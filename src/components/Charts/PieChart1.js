import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PieChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'pie',
                            labels: ['US', 'UK', 'CN', 'JP', 'RU'],
                            values: [201, 90, 71, 50, 48]}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'Top 5 Countries with most universities', paper_bgcolor:'#F0EBE3'}}
                />
            </div>
        )
    }
}
export default PieChart1;