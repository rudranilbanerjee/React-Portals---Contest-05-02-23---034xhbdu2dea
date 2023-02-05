import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
let [text,useText]=useState("");
let [textAreaValue,useTextAreaValue]=useState("");

  return (
    
    <div id="main">
      <input id="input" value={text} onChange={(e)=>{useText(e.target.value)}}></input><br/>
      <PortalButton buttonclick={()=>{useTextAreaValue(text)}} /><br/>
      <PortalTextArea value={textAreaValue}/>
    </div>
  )
}


export default App;
