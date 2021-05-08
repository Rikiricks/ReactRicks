import React, {Component, useState, useEffect} from 'react'

import {useSpeechRecognition} from 'react-speech-kit'

export const SpeechToTestHook = () => {

    const [text, setText] = useState();

    const {listen, stop} = useSpeechRecognition(
        {
            onResult: result=>setText(result)
        }
    );

    return(
        <div>
          <h2>Converting the Speech to Text...</h2>
          <textarea value={text}></textarea>
          <p>
            <button onClick={listen}>Listen</button>
            <button onClick={stop}>Stop</button>
          </p>
        </div>
      )

}