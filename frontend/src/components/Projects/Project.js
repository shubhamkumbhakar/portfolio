import React from 'react'
import project1 from './project1.PNG'
import project2 from './project22.PNG'
import project3 from './project3.PNG'
//import {ProjectList} from './ProjectList'
import './Project.css'
import styles from './Project.module.css'
const project = () => {
  return (
    <>
    <div id="projects">
       <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={project2} alt="Avatar" style={{width:'100%',height:'auto',borderRadius:'5px'}}/>
              <p style={{padding:'5px'}}>Chatting Application</p>
            </div>
            <div className="flip-card-back">
              <h1>Realtime Chatting app</h1>
              <p>Visit the app and chat with your loved ones in realtime.</p>
              <a href="https://shubhamkumbhakar-chat.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
            </div>
          </div>
        </div> 
       <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={project3} alt="Avatar" style={{width:'100%',height:'auto',borderRadius:'5px'}}/>
              <p>Dummy Job Portal</p>
            </div>
            <div className="flip-card-back">
              <h1>MERN stack web-app to post and apply for fake jobs</h1>
              <p>Visit the app and Post your fake jobs there.</p>
              <a href="https://cosmictech-shubhamkumbhakar.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
              
            </div>
          </div>
        </div> 
       <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={project1} alt="Avatar" style={{width:'100%',height:'auto',borderRadius:'5px'}}/>
              <p>Alan-AI Sorting Visualizer</p>
            </div>
            <div className="flip-card-back">
              <h1>Web-app to visualize the basic sorting algorithms.</h1>
              <p>Talk with AI Alan and ask him to do the things.</p>
              <a href="https://shubhamkumbhakar.github.io/Alan-AI-SortingVisualizer/" target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
              
            </div>
          </div>
        </div> 
    </div>
    <a href="https://drive.google.com/file/d/1Z2v1CHCJG8OLyw5rK7k1V5dml43nKpQM/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button id={styles.resume}>Download my Resume</button></a>
    <br/><br/><br/>
    </>
  )
}

export default project
