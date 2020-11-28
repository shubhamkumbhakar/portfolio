import React, { Component } from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import './Skills.css'


export class Programming extends Component {
    render() {
          return (
            <div>
                <h1 className="shead">Programming</h1>
                <RadarChart
                  captions={{
                    // columns
                    s1: 'DSA',
                    s2: 'Java',
                    s3: 'Maths',
                    s4: 'OOPs',
                    s5: 'C++'
                  }}
                  data={[
                    // data
                    {
                      data: {
                        s1: 0.8,
                        s2: 0.85,
                        s3: 0.8,
                        s4: 0.8,
                        s5: 0.8
                      },
                      meta: { color: 'blue'}
                    },
                  ]}
                  size={300}
                />
              </div>
          );
        
    }
}

export default Programming
