import React, { Component } from 'react';
import Plot from 'react-plotly.js';

console.log("hi")
class BarChart extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {type: 'scatter',
                            x: [77, 70, 70, 51, 72, 47, 73, 62, 59, 70, 59, 70, 54, 60, 77, 65, 79, 45, 55, 63, 68, 59, 49, 49, 49, 47, 54, 76, 45, 65, 67, 46, 58, 60, 62, 68, 46, 70, 50, 49, 61, 53, 79, 45, 63, 55, 58, 48, 62, 74, 70, 65, 71, 78, 53, 72, 73, 55, 62],
                            y: [95, 90, 89, 89, 87, 86, 85, 84, 82, 82, 81, 81, 81, 81, 74, 72, 71, 70, 70, 69, 69, 68, 68, 65, 63, 62, 62, 62, 61, 60, 60, 59, 59, 59, 58, 58, 58, 58, 57, 57, 57, 56, 56, 56, 55, 55, 54, 54, 54, 54, 54, 54, 53, 52, 52, 51, 51, 51, 50],
                            mode: 'markers',
                            text: ['UCL', 'University of Pennsylvania', 'The University of Edinburgh', 'Yale University', 'The University of Hong Kong', 'Columbia University', 'The University of Tokyo', 'University of Michigan-Ann Arbor', 'The University of Manchester', 'Seoul National University', 'McGill University', 'Fudan University', 'Kyoto University', 'King\'s College London', 'University of California, San Diego (UCSD)', 'Tokyo Institute of Technology (Tokyo Tech)', 'Monash University', 'Ludwig-Maximilians-Universität München', 'University of Bristol', 'The University of Warwick', 'The Hong Kong Polytechnic University', 'Osaka University', 'Université Paris-Saclay', 'National Taiwan University (NTU)', 'University of Zurich', 'University of Leeds', 'The University of Auckland', 'KTH Royal Institute of Technology ', 'University of Birmingham', 'Durham University', 'Pennsylvania State University', 'The University of Sheffield', 'University of St Andrews', 'Trinity College Dublin, The University of Dublin', 'University of Oslo', 'University of California, Davis', 'University of North Carolina, Chapel Hill', 'Technical University of Denmark', 'King Abdulaziz University (KAU)', 'University of Helsinki', 'Boston University', 'University of Alberta', 'Utrecht University', 'University of Nottingham', 'Freie Universitaet Berlin', 'Washington University in St. Louis', 'Newcastle University', 'Wageningen University & Research', 'Queen Mary University of London', 'University of Geneva', 'Purdue University', 'Leiden University', 'University of Southern California', 'Eindhoven University of Technology', 'Politecnico di Milano', 'KIT, Karlsruhe Institute of Technology', 'RWTH Aachen University', 'University of Rochester', 'Stockholm University']}
                        ]}
                    layout={ { width: 1000, height: 500, title: 'bar chart'}}
                />
            </div>
        )
    }
}
export default BarChart;