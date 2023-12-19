import React, { useState, useEffect } from "react";
import keyboard from "../tone_config/keyboardconfig";
import * as Tone from "tone";

import SequencerBtn from "./sequencer_components/SequencerButton";

Tone.Transport.loop = true;
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = "1m";

export default function Sequencer(props) {
  const [isRecording, setIsRecording] = useState(false);
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

  const playSequence = () => {
    props.sequence.start(0)
    Tone.Transport.start(0)
  }

  if (isRecording === true) {
    keyboard.down((note) => {
      if (sequence.length < 16) {
        setSequence([...sequence, Tone.Frequency(note.frequency).toNote()]);
      } else {
        setSequence(sequence);
      }
    });
  }

  useEffect(() => {
    props.sequence.events = sequence
  }, [sequence])

  return (
    <>
      <div className="d-flex">
        <SequencerBtn text="REC" onClick={toggleRecord} />
        <SequencerBtn text="CLEAR" onClick={clearSequence} />
        <SequencerBtn text="PLAY" onClick={playSequence} />
      </div>
      <p>SEQ: {sequence.toString()}</p>
      {isRecording === true && <p>REC</p>}
    </>
  );
}
