import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'bar',
                            x: BC1universities,
                            y: BC1academicRep,
                            name: 'Academic Reputation'},
                        {type: 'bar',
                            x: BC1universities,                            
                            y: BC1employerRep,
                            name: 'Employer Reputation'},
                        {type: 'bar',
                           x: BC1universities,                            
                           y: BC1intlFacultyRatio,
                            name: 'International Faculty Ratio'},
                        {type: 'bar',
                            x: BC1universities,                            
                            y: BC1intlStudentRatio,
                            name: 'International Student Ratio'} 
                        ]}
                    layout={ { width: 1000, height: 500, title: 'University Comparison', paper_bgcolor:'#E4DCCF', plot_bgcolor:'#fffdfa',yaxis: {title: {text: 'Score'}},
                }}
                />
            </div>
        )
    }
}
export default BarChart1;