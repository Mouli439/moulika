import React, {useState} from 'react';
import './App.css';

const BMI =()=>{

const [weight, setWeight]=useState('');
const [height, setHeight]=useState('');
const [bmi, setBMI]=useState(null);

const calculateBMI = ()=>{
if (weight && height){
const heightInMeters = height/100;
const bmiValue = (weight /(heightInMeters *heightInMeters)).toFixed(2);
setBMI(bmiValue);
}
};
const handleRefreshClick = () => {
  // Reload the page when the refresh button is clicked
  window.location.reload();
};
return(
  <div class="center-container blog-single-post">
  <div className="card mb-6">
   
<h1> BMI CALCULATOR</h1>
<label>
Weight (kg):   &nbsp;
<input type="number"  value={weight} onChange={(e)=> setWeight(e.target.value)}/>
  </label>
  <br />
  <label>
  Height (cm):     &nbsp;
  <input type="number"  value={height}  onChange={(e)=> setHeight(e.target.value)}/>
  </label>
  <br />&nbsp;
  <center><button onClick={calculateBMI}> Calculate BMI</button></center>
  {bmi && <p>Your BMI is:   {bmi}</p>}
<br />
  {/* Refresh button */}
  <center><button onClick={handleRefreshClick}>&#x21bb; Refresh</button></center> &nbsp;
<img
  src="https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg?_=07167"
  alt="bmi"
  style={{ width: '100%', height: '40%' }}
/>

  </div>

  </div>
); 
 };
export default BMI;