import React, { useState, useEffect } from "react";
import keyboard from "../tone_config/keyboardconfig";
import * as Tone from "tone";

import SequencerBtn from "./sequencer_components/SequencerButton";

Tone.Transport.loop = true;
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = "1m";

export default function Sequencer(props) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)
  const [sequence, setSequence] = useState([]);

  const toggleRecord = () => {
    if (isRecording === false) {
      setIsRecording(true);
    } else {
      setIsRecording(false);
    }
  };

  const clearSequence = () => {
    setSequence([]);
  };

  const toggleSequence = () => {
    // When initializing the sequencer, also start the Transport to ensure accurate playback
    if (isPlaying === false) {
      props.sequencer.start(0);
      Tone.Transport.start(0);
      setIsPlaying(true)
    } else {
      props.sequencer.stop(0)
      setIsPlaying(false)
    }
  };

  if (isRecording === true) {
    keyboard.down((note) => {
      if (sequence.length < 16) {
        setSequence([...sequence, Tone.Frequency(note.frequency).toNote()]);
      }
    });
  } else {
    // if not recording, set sequence to self to prevent trailing notes from being recorded
    keyboard.down((note) => {
      setSequence(sequence);
    });
  }

  // The sequencer object's event array is updated when sequence state changes
  useEffect(() => {
    props.sequencer.events = sequence;
  }, [sequence]);

  // When control key is pressed, a null value is pushed to the sequence array to produce rests
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Control") {
        console.log("user pressed: ", event.key);
        if (isRecording === true && sequence.length < 16) {
          setSequence([...sequence, null]);
        } else {
          setSequence(sequence);
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [sequence, isRecording]);

  return (
    <>
      <div className="d-flex">
        <SequencerBtn text="REC" onClick={toggleRecord} />
        <SequencerBtn text="CLEAR" onClick={clearSequence} />
        <SequencerBtn text="PLAY" onClick={toggleSequence} />
      </div>
      <p>SEQ: {sequence.toString()}</p>
      {isRecording === true && <p>REC</p>}
    </>
  );
}
