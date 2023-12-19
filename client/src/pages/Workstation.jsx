import { useState, useEffect } from "react";
import "./index.css";

import Synthesizer from "../components/Synthesizer";
import Sequencer from "../components/Sequencer";
import { synth1, synth2, synth3 } from "../tone_config/synthconfig";
import { sequence1, sequence2, sequence3 } from "../tone_config/transportconfig";

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
          sequence={sequence1}
          title="FMSYNTH"
          style={{ background: "lightsalmon" }}
        />
        <Synthesizer
          synth={synth2}
          sequence={sequence2}
          title="MONOSYNTH"
          style={{ background: "lightblue" }}
        />
        <Synthesizer
          synth={synth3}
          sequence={sequence3}
          title="AMSYNTH"
          style={{ background: "lightgreen" }}
        />
      </div>
    </>
  );
}
