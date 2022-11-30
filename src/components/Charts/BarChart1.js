import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart1 extends Component {

    render() {
        let BC1universities = ["UC Berkeley", "Arizona State University", "University of Arizona"];
        let BC1academicRep = [100, 98, 43];
        let BC1employerRep = [67, 78, 77];
        let BC1intlFacultyRatio = [0.3, 0.3, 0.2];
        let BC1intlStudentRatio = [0.9999, 0.3, 0.2];
        
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