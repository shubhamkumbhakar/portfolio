import React, { Component } from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export class Development extends Component {
    render() {
          return(
            <div>
              <h1 className="shead">Development</h1>
              <RadarChart
                  captions={{
                        s1: 'JavaScript',
                        s2: 'ReactJS',
                        s3: 'React Native',
                        s4: 'MongoDB',
                        s5: 'MySQL',
                        s6: 'NodeJS'
                  }}
                  data={[
                    {
                      data: {
                        s1: 0.9,
                        s2: 0.9,
                        s3: 0.75,
                        s4: 0.68,
                        s5: 0.76,
                        s6: 0.84
                      },
                      meta: { color: 'green', className: 'radar' }
                    },
                  ]}
                  size={300}
               />
              </div>
          );
        
    }
}

export default Development
