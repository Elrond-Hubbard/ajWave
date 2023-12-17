import { useState, useEffect } from "react";
import socket from "../tone_config/socketconfig";

import WaveformSelect from "../components/synth_components/WaveformSelect";
import UnisonSelect from "../components/synth_components/UnisonSelect";
import AmpEnvelope from "../components/synth_components/AmpEnvelope";
import FilterEnvelope from "../components/synth_components/FilterEnvelope";
import Filter from "../components/synth_components/Filter";

import "./Synthesizer.css";

export default function Synthesizer(props) {
  // Currently selected synth and slider values
  const [synth, setSynth] = useState(props.synth);
  const [waveform, setWaveform] = useState(synth.oscillator.type);
  const [unison, setUnison] = useState(synth.oscillator.spread);
  const [count, setCount] = useState(synth.oscillator.count);
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
  const [incomingBroadcast, setIncomingBroadcast] = useState(false);
  const [socketTest, setSocketTest] = useState("");

  // Update synth using slider values
  useEffect(() => {
    synth.oscillator.type = waveform;
    synth.oscillator.spread = unison;
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
  }, [
    waveform,
    unison,
    count,
    ampAttack,
    ampDecay,
    ampSustain,
    ampRelease,
    filtAttack,
    filtDecay,
    filtSustain,
    filtRelease,
    cutoff,
    resonance,
  ]);

  useEffect(() => {
    // If there are no incoming broadcasts, send synth state to server
    if (!incomingBroadcast) {
      socket.emit("updateSynthState", {
        waveform,
        unison,
        count,
        ampAttack,
        ampDecay,
        ampSustain,
        ampRelease,
        filtAttack,
        filtDecay,
        filtSustain,
        filtRelease,
        cutoff,
        resonance,
      });
    }
    setIncomingBroadcast(false);
    // retrieve broadcast synth state from server
    socket.on("synthStateChanged", (newSynthState) => {
      setSocketTest(newSynthState.cutoff);
      setWaveform(newSynthState.waveform);
      setUnison(newSynthState.unison);
      setCount(newSynthState.count);
      setAmpAttack(newSynthState.ampAttack);
      setAmpDecay(newSynthState.ampDecay);
      setAmpSustain(newSynthState.ampSustain);
      setAmpRelease(newSynthState.ampRelease);
      setFiltAttack(newSynthState.filtAttack);
      setFiltDecay(newSynthState.filtDecay);
      setFiltSustain(newSynthState.filtSustain);
      setFiltRelease(newSynthState.filtRelease);
      setCutoff(newSynthState.cutoff);
      setResonance(newSynthState.resonance);
      setIncomingBroadcast(true);
    });
    return () => {
      // remove the event listener when the component unmounts
      socket.off("synthStateChanged");
    };
  }, [
    waveform,
    unison,
    count,
    ampAttack,
    ampDecay,
    ampSustain,
    ampRelease,
    filtAttack,
    filtDecay,
    filtSustain,
    filtRelease,
    cutoff,
    resonance,
  ]);

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
          <WaveformSelect setWaveform={setWaveform} waveform={waveform} />
          <div className="col-4"></div>
          <UnisonSelect
            unison={unison}
            setUnison={setUnison}
            setCount={setCount}
            count={count}
          />
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
        <h3>Test: {props.test}</h3>
      </div>
    </>
  );
}
