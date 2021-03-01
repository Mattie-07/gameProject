import React from "react";
import './assets/styles.css'
import Button from './components/Button'


const App = () => {
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
}
  return <>
    <h1 className="text-center textChange"> 
        Thank you for landing...<br/>
        <br/>
        <p>We're going to make sure you can play a game with your friends or family</p>
        <br/>
        <br/>
        Let's get you started with your first Jump. Click down below to make the leap.<br/>
        <br/>
        <br/>
        <br/>
        <Button />
    </h1>
    
    </>
  
}

export default App;
