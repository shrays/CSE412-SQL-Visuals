import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PieChart1 extends Component {
    render() {
        let PC2countries = ["United States", "United Kingdom", "China", "Germany", "France", "Armenia"];
        let PC2count = [12, 3, 9, 2, 1, 80];
        
        return (
            <div>
                <Plot
                    data={[
                        {type: 'pie',
                            labels: PC2countries,
                            values: PC2count}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'Most Technology Schools', paper_bgcolor:'#E4DCCF'}}
                />
            </div>
        )
    }
}
export default PieChart1;