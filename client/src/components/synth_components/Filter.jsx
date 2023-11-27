import { useState, useEffect } from "react";

import SynthSlider from "./SynthSlider";

import synth from "../../tone-config/synthconfig";
import AudioKeys from "audiokeys";
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
  synth.triggerAttack(note.frequency);
});
keyboard.up((note) => {
  currentKeyUp = note.note;
  if (currentKeyUp === currentKeyDown) {
    synth.triggerRelease();
  }
});

export default function Filter() {

  const [cutoff, setCutoff] = useState(200);
  useEffect(() => {
    synth.filterEnvelope.baseFrequency = cutoff;
  });

  const [resonance, setResonance] = useState(5);
  useEffect(() => {
    synth.filter.Q.value = resonance
  })

  return (
    <fieldset>
      <legend>LPF</legend>
      <div className="d-flex flex-column">
        <label>CUTOFF</label>
        <SynthSlider
          value={cutoff}
          min={20}
          max={2000}
          step={1}
          setValue={setCutoff}
        />
        <label>RESONANCE</label>
        <SynthSlider
          value={resonance}
          min={0}
          max={20}
          step={0.1}
          setValue={setResonance}
        />
      </div>
    </fieldset>
  );
}
