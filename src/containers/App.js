import './App.css';
import React, {Component} from 'react';
import MyPlan from '../images/MyPlan.png'
import calendar_MyPlan from '../images/calendar_MyPlan.jpg'
import graph_MyPlan from '../images/graph_MyPlan.jpg'
import questions_sleep from '../images/questions_sleep.jpg'

import './Style_cont.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const images = [
    { src: MyPlan }
];

function getWindowSize() {
  const {innerWidth} = window;
  console.log({innerWidth})
  return innerWidth;
}
class App extends Component {
  

  

  render() {
    


      
      return (
        
        
        
        <div>
          
        <div class="statusBar">

          <img className="row br-100 h3 w3 dib"
            src={MyPlan}
            alt="avatar"
          />    
          <p1 className = "appName">My Plan</p1>

          <div className="tr login">
            <p2 className = "language">English (US)</p2>
          <button className = "login_button" style = {{color: '#FF8C69'}}>
            <p2>log in</p2>
            </button>

            <button className = "signup_button">
            <p2 style= {{color:'white'}}>Sign Up - It's Free!</p2>
            </button>

          </div>




        </div>

        <div className="motto">
          <div style = {{width: getWindowSize()/1.8, marginRight:200}}>

            
          <h1 className = "MottoContainer" style = {{fontSize: 70,   fontFamily: 'Times New Roman'}}>
            IMPROVE YOUR MENTAL HEALTH BY BEING MORE PRODUCTIVE 
          </h1>

          <p1 style = {{fontSize: 30,   fontFamily: 'Times New Roman'}}>Meet MyPlan, the smart calendar powered by artificial intelligence that plans your study 
            times for you, monitors your sleep and makes sure that you're physically active. </p1>
          </div>

          <div>
            <Carousel className = "w5" autoPlay interval="2000" transitionTime="2000" showThumbs={false} style = {{height: 600, width: 2, borderRadius: 40, marginBottom:10, marginRight:50}}>
          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={calendar_MyPlan}
            alt="avatar"
          /> 
          </div>

          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={questions_sleep}
            alt="avatar"
          /> 
          </div>

          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={graph_MyPlan}
            alt="avatar"
          /> 
          </div>

</Carousel>

          </div>

          

          




        </div>
        



        

        

        
        </div>
        

          
            




  


    );
  }
}

export default App;
