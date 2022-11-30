import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart1 extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'bar',
                            x: ['Arizona State University', 'The University of Arizona', 'Northern Arizona University'],
                            y: [46, 39, 6],
                            name: 'Academic Reputation'},
                        {type: 'bar',
                            x: ['Arizona State University', 'The University of Arizona', 'Northern Arizona University'],
                            y: [59, 21, 13],
                            name: 'Citations Per Faculty'},
                        {type: 'bar',
                           x: ['Arizona State University', 'The University of Arizona', 'Northern Arizona University'],
                            y: [40.2, 22.4, 6.1],
                            name: 'Employer Reputation'},
                        // {type: 'bar',
                        //     x: ['Arizona State University', 'The University of Arizona', 'Northern Arizona University'],
                        //     y: [8, 67, 4],
                        //     name: 'Faculty Student Ratio'},
                        {type: 'bar',
                            x: ['Arizona State University', 'The University of Arizona', 'Northern Arizona University'],
                            y: [67, 20, 3],
                            name: 'International Faculty Ratio'},
                        {type: 'bar',
                            x: ['Arizona State University', 'The University of Arizona', 'Northern Arizona University'],
                            y: [90, 97, 48],
                            name: 'International Research Network'},
                        {type: 'bar',
                            x: ['Arizona State University', 'The University of Arizona', 'Northern Arizona University'],
                            y: [37, 13, 2],
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