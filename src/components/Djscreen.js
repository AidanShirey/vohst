import React from 'react'
import './Djscreen.css'

function Djscreen() {
  return (
    <div className='djscreen'>
        <div className='column'>
            <div className='livestream'>
                livestream here
            </div>
            <div className='play-track'>
                play track
            </div>
            <div className='dj-controls'>
                dj controls
            </div>
        </div>
        <div className='column'>
            <div className='livestream-effects'>
                livestream effects
            </div>
            <div className='import-library'>
                import library
            </div>
            <div className='chat'>
                chat
            </div>
        </div>
    </div>
  )
}

export default Djscreen