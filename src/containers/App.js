import './App.css';
import React, {useState, useEffect} from 'react';
import MyPlan from '../images/MyPlan.png'
import calendar_MyPlan from '../images/calendar_MyPlan.jpg'
import graph_MyPlan from '../images/graph_MyPlan.jpg'
import questions_sleep from '../images/questions_sleep.jpg'
import Add_MyPlan from '../images/Add_MyPlan.jpg'
import sport_MyPlan from '../images/sport_MyPlan.jpg'
import prod_MyPlan from '../images/prod_MyPlan.jpg'
import Sleep_MyPlan from '../images/Sleep_MyPlan.jpg'

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";



import './Style_cont.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CardList from '../components/CardList';




function getWindowSize() {
  const {innerWidth} = window;
  console.log({innerWidth})
  return innerWidth;
}






function App() {
  //const navigate = useNavigate();
      const [count, setCount] = useState(0)
      console.log(count)
      
      
      return (
        
        
        
        
        <div>
          
        <div className="statusBar">

          <img className="row br-100 h3 w3 dib grow"
            src={MyPlan}
            alt="avatar"
          />    
          <p1 className = "appName" style = {{fontFamily: 'Open Sans'}}>My Plan</p1>

          <div className="tr login">
            <p2 className = "language" style = {{fontFamily: 'Open Sans'}}>English (US)</p2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">
              <button className = "login_button" style = {{color: '#FF8C69'}}>
                <p2 style = {{fontFamily: 'Open Sans'}}>log in</p2>
              </button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">
            <button  className = "signup_button">
          
            <p2 style= {{color:'white', fontFamily: 'Open Sans'}}>Sign Up - It's Free!</p2>
            </button>
            </a>

          </div>




        </div>

        <div className="motto">
          <div style = {{width: getWindowSize()/1.1, marginRight:200}}>

            
          <h1 className = 'Open Sans' style = {{fontSize: 70,   fontFamily: 'Open Sans', fontWeight: 500}}>
            IMPROVE YOUR MENTAL HEALTH BY BEING MORE PRODUCTIVE 
          </h1>

          <p1 style = {{fontSize: 30,   fontFamily: 'Open Sans'}}>Meet MyPlan, the smart calendar powered by artificial intelligence that plans your study 
            times for you, monitors your sleep and makes sure that you're physically active </p1>
          </div>

          <div style = {{marginTop: 100}}>
            <Carousel className = "w5 grow"showStatus = {false} autoPlay interval="3000" transitionTime="2000" showThumbs={false} infiniteLoop = {true} style = {{height: 600, width: 2, borderRadius: 40, marginBottom:10, marginRight:50}}>
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
            src={Add_MyPlan}
            alt="avatar"
          /> 
          </div>

</Carousel>

          </div>





        </div>

        <div className = "Andr_ios" style = {{marginLeft: getWindowSize()/4.5}}>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">
              
            <h3 style = {{cursor: 'pointer', fontFamily: 'Open Sans'}}>{"Iphone >"}</h3>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">

            <h3 style = {{cursor: 'pointer', fontFamily: 'Open Sans'}}>{"Android >"}</h3>
            </a>

          </div>



          <div className="motto" style = {{marginLeft:100}}>
          

          <div style = {{marginRight:200, marginTop: 100}}>
            <Carousel className = "w5 grow" axis='vertical' showStatus = {false} autoPlay interval="3000" transitionTime="2000" showThumbs={false} infiniteLoop = {true} style = {{height: 600, width: 2, borderRadius: 40, marginBottom:10, marginRight:50}}>
            <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={prod_MyPlan}
            alt="avatar"
          /> 
          </div>
          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={graph_MyPlan}
            alt="avatar"
          /> 
          </div>

          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={sport_MyPlan}
            alt="avatar"
          /> 
          </div>

          <div>
          <img className="grow bg-light-green br1 pa1 shadow-5 w10" style = {{height: 600, borderRadius: 40, marginBottom:10}}
            src={Sleep_MyPlan}
            alt="avatar"
          /> 
          </div>

</Carousel>



          </div>

          <div style = {{width: getWindowSize()/1, marginRight:200}}>

            
          <h1 className = "MottoContainer" style = {{fontSize: 70,   fontFamily: 'Open Sans', fontWeight: 500}}>
            HAVE ACCESS TO DAILY REPORTS ABOUT YOUR PERFORMANCES
          </h1>

          <p1 style = {{fontSize: 30,   fontFamily: 'Open Sans'}}>MyPlan creates data visualizations on your productivity, 
          sleep and physical activities to help you track your progress</p1>
          </div>





        </div>

        <div className="statusBar" style = {{flex:1, padding: 20, marginTop: 150, marginBottom:150}}>
          <div style = {{width: getWindowSize()/1.8, marginRight:200}}>
        <h1 className = "MottoContainer" style = {{fontSize: 70,   fontFamily: 'Open Sans', fontWeight: 500}}>
            STUDENTS LOVE MYPLAN
          </h1>

          </div>

          <p1 style = {{fontSize: 30,   fontFamily: 'Open Sans'}}>MyPlan is a personalized tool
           that helps you become the best version of yourself</p1>

        </div>
        <div className='tc' style = {{backgroundColor: "white"}}>
        <CardList/>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKnIRTQ52IO-zTD8TMNbJV6LzK03Ptuf3bxTk6M9nTVLQPTw/viewform?vc=0&c=0&w=1&flr=0">

        <button style = {{marginBottom: 50}} className = "signup_button">

        <p2 style= {{color:'black', fontFamily: 'Open Sans'}}>Get Started!</p2>
        </button>
        </a>


        </div>

        



        



        

        

        
        </div>
        

          
            




  


    );
}

export default App;

