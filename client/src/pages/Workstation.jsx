import "./index.css";

import Synthesizer from "../components/Synthesizer";
import { synth1, synth2, synth3 } from "../tone_config/synthconfig";
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
          title="FM SYNTH"
          style={{ background: "lightsalmon" }}
        />
        <Synthesizer
          synth={synth2}
          title="MONOSYNTH"
          style={{ background: "lightblue" }}
        />
        <Synthesizer
          synth={synth3}
          title="AM SYNTH"
          style={{ background: "lightgreen" }}
        />
      </div>
    </>
  );
}
