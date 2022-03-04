import React from 'react'
import './Roleselectscreen.css';


function Roleselectscreen() {
  return (
    <div className='roleselectscreen'>
        <div className='promptcontainer'>
            <div className='prompt'>Are you a Viewer or a DJ?</div>
            <div className='promptdisccontainer'>
                <div className='promptdisc'><div className='promptdiscname'>Viewer</div></div>
                <div className='promptdisc'><div className='promptdiscname'>DJ</div></div>
            </div> 
        </div>
    </div>
  )
}

export default Roleselectscreen