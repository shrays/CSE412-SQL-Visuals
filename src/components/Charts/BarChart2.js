import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'bar',
                            x: BC2universities,
                            y: BC2academicRep,
                            name: 'Academic Reputation'},
                        {type: 'bar',
                            x: BC2universities,
                            y: BC2citationsPerFaculty,
                            name: 'Citations Per Faculty'},
                        {type: 'bar',
                           x: BC2universities,
                            y: BC2employerRep,
                            name: 'Employer Reputation'},
                        {type: 'bar',
                            x: BC2universities,
                            y: BC2internationalFacultyRatio,
                            name: 'International Faculty Ratio'},
                        {type: 'bar',
                            x: BC2universities,
                            y: BC2interantionalResearchNetwork,
                            name: 'International Research Network'},
                        {type: 'bar',
                            x: BC2universities,
                            y: BC2internationalStudentRatio,
                            name: 'International Student Ratio'}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'University Comparison', paper_bgcolor:'#E4DCCF', plot_bgcolor:'#fffdfa',yaxis: {title: {text: 'Score'}},
                }}
                    // plot_bgcolor:"gray", paper_bgcolor:"orange"
                />
            </div>
        )
    }
}
export default BarChart1;

// import React, { Component } from 'react';
// import Plot from 'react-plotly.js';

// class BarChart extends Component {
//     render() {
//         return (
//             <div>
//                 <Plot
//                     data={[
//                         {type: 'bar',
//                             x: ['one', 'two', 'three'],
//                             y: [29,300,85]}
//                         ]}
//                     layout={ { width: 1000, height: 500, title: 'bar chart'}}
//                 />
//             </div>
//         )
//     }
// }
// export default BarChart;