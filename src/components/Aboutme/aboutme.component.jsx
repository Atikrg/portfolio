import React, {useRef} from 'react'
import "./aboutme.component.css"
const Aboutme = () => {
  const ref = useRef(null);
  return (
    <div>
        <div className='aboutme-header' ref = {ref}>
            <p>About me</p>
        </div>
        <div className='aboutme-content'>
            <div className='clip-image'></div>
            <div className='writeUp text-justify'>
                My name is Atik Salim Rangnekar. I am a Full Stack Web Developer and Machine Learning Expert. Currently Studying in Finolex Academy of Management And Technology. 
                <br></br>            
            </div>

        </div>
    </div>
  )
}

export default Aboutme
