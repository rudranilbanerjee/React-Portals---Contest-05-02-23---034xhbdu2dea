import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=()=>{
   return ReactDOM.createPortal(
          <button id="button" onClick={}>Click</button>
          ,
          document.getElementById('portal-button');
    )
//     return (
//         <div>
//             <button id="button" onClick={}>Click</button>
//         </div>
        
//     )
}
export default PortalButton;

//portal-button id will be used here for portal purpose
