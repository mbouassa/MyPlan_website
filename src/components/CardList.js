import React from 'react';
import Card from './Card';
import stu_1 from '../images/stu_1.jpg'
import stu_2 from '../images/stu_2.jpg'
import stu_3 from '../images/stu_3.jpg'


const CardList = ({ robots }) => {
  return (
    <div className = "mt0" style = {{marginLleft: 'auto', marginRight: 'auto', alignItems: 'center'}}>
      
        <Card source={stu_1} par = "MyPlan is honestly helping me a lot in my studying. I used to be very unorganized and frustrated because of the grades I got. But thanks to MyPlan, I don't need to worry about organizing anything anymore because the app does it for me."/>
        <Card source={stu_2} par = "I always wanted to workout but I never had time before MyPlan. Now, I'm very productive and have a lot of free time to try new activities."/>
        <Card source={stu_3} par = "I think that MyPlan tackles the 3 most important things in a student's life which are productivity, sleep and physical activities. Now that I sleep well, and have time to workout, my mental health has never been that good."/>
        
      
    </div>
  );
}

export default CardList;