import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PieChart1 extends Component {
    render() {
        let PC1Labels = ["UC Berkeley", "Arizona State University", "University of Arizona"];
        let PC1Values = [100, 98, 43];

        return (
            <div>
                <Plot
                    data={[
                        {type: 'pie',
                            labels: PC1Labels,
                            values: PC1Values}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'Top 5 Countries Represented in Rankings', paper_bgcolor:'#E4DCCF'}}
                />
            </div>
        )
    }
}
export default PieChart1;