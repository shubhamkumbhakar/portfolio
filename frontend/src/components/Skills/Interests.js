import React, { Component } from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import './Skills.css'
 
export class Interests extends Component {
    render() {
          return (
            <div>
                <h1 className="shead">Interests</h1>
                <RadarChart
                  captions={{
                    // columns
                    s1: 'Augmented Reality',
                    
                    s2: 'Painting',
                    s3: 'AI-Innovations',
                    s4: 'App-Development',
                    s5: 'Reading'
                    
                  }}
                  data={[
                    // data
                    {
                      data: {
                        s1: 0.9,
                        s3: 0.8,
                        s2: 0.9,
                        s4: 0.85,
                        s5: 0.8
                      },
                      meta: { color: 'orange'}
                    },
                  ]}
                  size={300}
                />
              </div>
          );
        
    }
}

export default Interests
