import React, { Component } from 'react';
import Foot from './Foot';
import Logo from './Logo';
import 'tachyons';
import './Home.css';
import RecordSpeech from './RecordSpeech';
import Navigation from './Navigation';


var recognizeMic = require('watson-speech/speech-to-text/recognize-microphone');
var recognizeFile = require('watson-speech/speech-to-text/recognize-file');
var stream;
class Mainpage extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }

  onListenClick = () => {
    fetch('https://whispering-oasis-62504.herokuapp.com/api/speech-to-text/token')
      .then(function(response) {
          return response.text();
      }).then( (token) => {
        stream = recognizeMic({
            token: token,
            outputElement: '#output'
            /** objectMode: true, // send objects instead of text
            extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods
            **/
        });

        /** stream.on('data', (data) => {
          console.log(data);
          this.setState({
            text: data.alternatives[0].transcript
          })
        });
        **/
        stream.on('error', function(err) {
            console.log(err);
        });
        document.querySelector('#stop').onclick = stream.stop.bind(stream);
      }).catch(function(error) {
          console.log(error);
      });
  }

  onAudioFile = () => {
    document.querySelector('#button').onclick = () => {
      fetch('https://whispering-oasis-62504.herokuapp.com/api/speech-to-text/token')
        .then((response) => {
          return response.text();
        })
        .then(function (token) {
          stream = recognizeFile({
            token: token,
            file: document.querySelector('#audiofile').files[0],
            play: true, // play the audio out loud
            outputElement: '#output' // CSS selector or DOM Element (optional)
        });
        stream.on('error', function(err) {
            console.log(err);
        });
      }).catch(function(error) {
          console.log(error);
      });
    };
    document.querySelector('#stop').onclick = function() {
        if (stream) {
            stream.stop();
        }
    };
  }

  render() {
    return (
        <div>
          <Navigation />
          <Logo />
          <RecordSpeech onAudioFile={this.onAudioFile.bind(this)} textShow = {this.state.text} onListenClick={this.onListenClick.bind(this)} />
          <Foot />
        </div>
    );
  }
}

export default Mainpage;
