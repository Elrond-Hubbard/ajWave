import { useState, useEffect } from "react";
import "./index.css";

import Synthesizer from "../components/Synthesizer";

import { synth1, synth2, synth3 } from "../tone_config/synthconfig";
import { sequencer1, sequencer2, sequencer3 } from "../tone_config/transportconfig";

import keyboard from "../tone_config/keyboardconfig";
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

  return (
    <>
      <div className="px-5 d-flex justify-content-center">
        <Synthesizer
          synth={synth1}
          sequencer={sequencer1}
          title="FMSYNTH"
          style={{ background: "lightsalmon" }}
          synthNum="1"
        />
        <Synthesizer
          synth={synth2}
          sequencer={sequencer2}
          title="MONOSYNTH"
          style={{ background: "lightblue" }}
          synthNum="2"
        />
        <Synthesizer
          synth={synth3}
          sequencer={sequencer3}
          title="AMSYNTH"
          style={{ background: "lightgreen" }}
          synthNum="3"
        />
      </div>
    </>
  );
}
