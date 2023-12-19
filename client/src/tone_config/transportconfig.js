import * as Tone from "tone";
import {synth1, synth2, synth3} from "./synthconfig"

const loop1 = [];
const loop2 = [];
const loop3 = [];

const sequence1 = new Tone.Sequence(
  (time, note) => {
    synth1.triggerAttackRelease(note, "16n", time);
  },
  loop1,
  "16n"
);

const sequence2 = new Tone.Sequence(
  (time, note) => {
    synth2.triggerAttackRelease(note, "16n", time);
  },
  loop2,
  "16n"
);

const sequence3 = new Tone.Sequence(
  (time, note) => {
    synth3.triggerAttackRelease(note, "16n", time);
  },
  loop3,
  "16n"
);

export {sequence1, sequence2, sequence3}