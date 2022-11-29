import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'bar',
                            x: ['Nanyang Technological University, Singapore (NTU)', 'The Hong Kong University of Science and Technology', 'KAIST - Korea Advanced Institute of Science & Technology'],
                            y: [90.4, 82, 88.1],
                            name: 'Academic Reputation'},
                        {type: 'bar',
                            x: ['Nanyang Technological University, Singapore (NTU)', 'The Hong Kong University of Science and Technology', 'KAIST - Korea Advanced Institute of Science & Technology'],
                            y: [76.1, 50.1, 85.8],
                            name: 'Employer Reputation'},
                        {type: 'bar',
                            x: ['Nanyang Technological University, Singapore (NTU)', 'The Hong Kong University of Science and Technology', 'KAIST - Korea Advanced Institute of Science & Technology'],
                            y: [100, 100, 23.1],
                            name: 'International Faculty Ratio'},
                        {type: 'bar',
                            x: ['Nanyang Technological University, Singapore (NTU)', 'The Hong Kong University of Science and Technology', 'KAIST - Korea Advanced Institute of Science & Technology'],
                            y: [74.1, 87.9, 12.3],
                            name: 'International Student Ratio'}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'bar chart', paper_bgcolor:'#F0EBE3'}}
                    // plot_bgcolor:"gray", paper_bgcolor:"orange"
                />
            </div>
        )
    }
}
export default BarChart1;