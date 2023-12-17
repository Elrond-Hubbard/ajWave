import { useState, useEffect } from "react";
import "./index.css";

import Synthesizer from "../components/Synthesizer";
import { synth1, synth2, synth3 } from "../tone_config/synthconfig";
import AudioKeys from "audiokeys";
import * as Tone from "tone"

const keyboard = new AudioKeys({
  rows: 2,
  polyphony: 1,
  priority: "last",
  octave: -2,
});
let currentKeyDown;
let currentKeyUp;
keyboard.down((note) => {
  currentKeyDown = note.note;
  synth1.triggerAttack(note.frequency);
  synth2.triggerAttack(note.frequency);
  synth3.triggerAttack(note.frequency);
});
keyboard.up((note) => {
  currentKeyUp = note.note;
  if (currentKeyUp === currentKeyDown) {
    synth1.triggerRelease();
    synth2.triggerRelease();
    synth3.triggerRelease();
  }
});

export default function Workstation() {

  const [currentKey, setCurrentKey] = useState(null)

  keyboard.down((note) => {
    setCurrentKey(Tone.Frequency(note.frequency).toNote())
  })

  return (
    <>
      <div className="px-5 d-flex justify-content-center">
        <Synthesizer
          synth={synth1}
          title="FMSYNTH"
          style={{ background: "lightsalmon" }}
        />
        <Synthesizer
          synth={synth2}
          title="MONOSYNTH"
          style={{ background: "lightblue" }}
          test={currentKey}
        />
        <Synthesizer
          synth={synth3}
          title="AMSYNTH"
          style={{ background: "lightgreen" }}
        />
      </div>
    </>
  );
}
