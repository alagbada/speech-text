import React from 'react';
import './RecordSpeech.css';

const RecordSpeech = ({onListenClick, textShow, onAudioFile}) => {
  return (
    <div>
      <h2 className='grow'>Record your Speech and Convert it to Text... Enjoy the Fun!</h2>
      <div className='mic'>
        <button
          className = 'f6 link dim br3 ma2 ph3 pv2 mb2 dib white bg-dark-gray'
          onClick = {onListenClick} >
          Start Recording
        </button>
        <button
          className = 'f6 link dim br3 ma2 ph3 pv2 mb2 dib white bg-dark-gray' id ='stop'>
          Stop Recording
        </button>
        <input className='f6 link dim br3 ma2 ph3 pv2 mb2 dib white bg-dark-gray' type="file" id="audiofile" />
        <button
          className= 'f6 link dim br3 ma2 ph3 pv2 mb2 dib white bg-dark-gray'
          onClick={onAudioFile}
          id="button">
          Transcribe and Play
        </button>
      </div>
      <div className="textDisp pa2 black-80 shadow-5" id="output">
        {textShow}
      </div>

    </div>
  );
}

export default RecordSpeech;
