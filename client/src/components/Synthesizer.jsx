import { useState, useEffect } from "react";

import WaveformSelect from "../components/synth_components/WaveformSelect";
import UnisonSelect from "../components/synth_components/UnisonSelect";
import AmpEnvelope from "../components/synth_components/AmpEnvelope";
import FilterEnvelope from "../components/synth_components/FilterEnvelope";
import Filter from "../components/synth_components/Filter";

import "./Synthesizer.css";

import synth from "../tone-config/synthconfig";
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


export default function Synthesizer(props) {

  const [waveform, setWaveform] = useState(synth.oscillator.type)
  const [count, setCount] = useState(synth.oscillator.count)

  const [ampAttack, setAmpAttack] = useState(synth.envelope.attack);
  const [ampDecay, setAmpDecay] = useState(synth.envelope.decay);
  const [ampSustain, setAmpSustain] = useState(synth.envelope.sustain);
  const [ampRelease, setAmpRelease] = useState(synth.envelope.release);

  const [filtAttack, setFiltAttack] = useState(synth.filterEnvelope.attack);
  const [filtDecay, setFiltDecay] = useState(synth.filterEnvelope.decay);
  const [filtSustain, setFiltSustain] = useState(synth.filterEnvelope.sustain);
  const [filtRelease, setFiltRelease] = useState(synth.filterEnvelope.release);

  const [cutoff, setCutoff] = useState(synth.filterEnvelope.baseFrequency);
  const [resonance, setResonance] = useState(synth.filter.Q.value);

  useEffect(() => {
    synth.oscillator.type = waveform;
    synth.oscillator.count = count;
    synth.envelope.attack = ampAttack;
    synth.envelope.decay = ampDecay;
    synth.envelope.sustain = ampSustain;
    synth.envelope.release = ampRelease;
    synth.filterEnvelope.attack = filtAttack;
    synth.filterEnvelope.decay = filtDecay;
    synth.filterEnvelope.sustain = filtSustain;
    synth.filterEnvelope.release = filtRelease;
    synth.filterEnvelope.baseFrequency = cutoff;
    synth.filter.Q.value = resonance;
  }),
    [filtAttack, filtDecay, filtSustain, filtRelease, cutoff, resonance];

  return (
    <>
      <div
        id="synthesizer"
        className="col-12 col-xl-4 p-5 m-3"
        style={props.style}
      >
        <h2 className="text-center">{props.title}</h2>
        {/* OSCILLATOR */}
        <section className="pb-3 d-flex flex-row">
          <WaveformSelect setWaveform={setWaveform} waveform={waveform}/>
          <div className="col-4"></div>
          <UnisonSelect setCount={setCount} count={count}/>
        </section>
        {/* ENVELOPE */}
        <section className="d-flex pb-3">
          <AmpEnvelope
            ampAttack={ampAttack}
            setAmpAttack={setAmpAttack}
            ampDecay={ampDecay}
            setAmpDecay={setAmpDecay}
            ampSustain={ampSustain}
            setAmpSustain={setAmpSustain}
            ampRelease={ampRelease}
            setAmpRelease={setAmpRelease}
          />
          <FilterEnvelope
            filtAttack={filtAttack}
            setFiltAttack={setFiltAttack}
            filtDecay={filtDecay}
            setFiltDecay={setFiltDecay}
            filtSustain={filtSustain}
            setFiltSustain={setFiltSustain}
            filtRelease={filtRelease}
            setFiltRelease={setFiltRelease}
          />
        </section>
        {/* FILTER */}
        <section className="pb-3">
          <Filter
            cutoff={cutoff}
            setCutoff={setCutoff}
            resonance={resonance}
            setResonance={setResonance}
          />
        </section>
      </div>
    </>
  );
}
