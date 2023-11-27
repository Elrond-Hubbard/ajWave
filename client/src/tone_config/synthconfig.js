import * as Tone from 'tone';

const comp = new Tone.Compressor(-50, 3).toDestination();

const synth = new Tone.MonoSynth({
  oscillator: {
    type: "fatsawtooth",
    count: 3,
    spread: 25,
  },
  envelope: {
    attack: 0.005,
    decay: 0.5,
    sustain: 0.1,
    release: 1,
  },
  filter: {
    Q: 5,
  },
  filterEnvelope: {
    attack: 0.005,
    decay: 0.5,
    sustain: 0.1,
    release: 1,
    baseFrequency: 200,
  },
}).connect(comp);

export default synth;