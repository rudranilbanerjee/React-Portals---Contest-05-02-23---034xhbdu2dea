import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=(param)=>{
    return ReactDOM.createPortal(
            <textarea id="textarea" value={param.value}></textarea>,
           document.getElementById('portal-textarea')
    )
}
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose
