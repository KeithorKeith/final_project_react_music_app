import React, {useState, useEffect} from 'react';
import WebcamCapture from './Webcam';
import CircularSlider from '@fseehawer/react-circular-slider';
import { ReactComponent as EmojiIcon } from '../Images/smileyface.svg';

const MoodSelector = (props) => {    

    const [sliderValance, setSliderValance] = useState(180);

    return (
        <>
           
                <CircularSlider
                    label="Mood selector"
                    labelColor="#005a58"
                    knobColor="#005a58"
                    progressColorFrom="#00bfbd"
                    progressColorTo="#009c9a"
                    progressSize={15}
                    trackColor="#eeeeee"
                    trackSize={24}
                    data= {[]}    
                    dataIndex={sliderValance}
                    onChange={ value => { setSliderValance(value) } }
                    
                >
                <EmojiIcon x="9" y="9" width="18px" height="18px" />
                </CircularSlider>
                <div className="webcam">
                    <WebcamCapture setEmotion={props.setEmotion}/>
                </div>
         
                <input></input>
                <h1>Hello from mood selector</h1>
            
        </>    
    )
    }

 export default MoodSelector