import React from 'react'
import './Roleselectscreen.css';
import {Link} from 'react-router-dom';


function Roleselectscreen() {
  return (
    <div className='roleselectscreen'>
        <div className='promptcontainer'>
            <div className='prompt'>Are you a Viewer or a DJ?</div>
            <div className='promptdisccontainer'>
                <Link to="/viewerscreen" className='promptdisc'><div className='promptdiscname'>Viewer</div></Link>
                <Link to="/djscreen" className='promptdisc'><div className='promptdiscname'>DJ</div></Link>
            </div> 
        </div>
    </div>
  )
}

export default Roleselectscreen