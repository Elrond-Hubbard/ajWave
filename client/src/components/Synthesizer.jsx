import { useState, useEffect } from "react";
import socket from "../tone_config/socketconfig";

import WaveformSelect from "../components/synth_components/WaveformSelect";
import UnisonSelect from "../components/synth_components/UnisonSelect";
import AmpEnvelope from "../components/synth_components/AmpEnvelope";
import FilterEnvelope from "../components/synth_components/FilterEnvelope";
import Filter from "../components/synth_components/Filter";

import "./Synthesizer.css";

export default function Synthesizer(props) {
  // Currently selected synth
  const [synth, setSynth] = useState(props.synth);
  // Slider values used to interface with synth
  const [waveform, setWaveform] = useState(synth.oscillator.type);
  const [incomingWaveform, setIncomingWaveform] = useState(false);

  const [unison, setUnison] = useState(synth.oscillator.spread);
  const [incomingUnison, setIncomingUnison] = useState(false);

  const [count, setCount] = useState(synth.oscillator.count);
  const [incomingCount, setIncomingCount] = useState(false);

  const [ampAttack, setAmpAttack] = useState(synth.envelope.attack);
  const [incomingAmpAttack, setIncomingAmpAttack] = useState(false);

  const [ampDecay, setAmpDecay] = useState(synth.envelope.decay);
  const [incomingAmpDecay, setIncomingAmpDecay] = useState(false);

  const [ampSustain, setAmpSustain] = useState(synth.envelope.sustain);
  const [incomingAmpSustain, setIncomingAmpSustain] = useState(false);

  const [ampRelease, setAmpRelease] = useState(synth.envelope.release);
  const [incomingAmpRelease, setIncomingAmpRelease] = useState(false);

  const [filtAttack, setFiltAttack] = useState(synth.filterEnvelope.attack);
  const [incomingFiltAttack, setIncomingFiltAttack] = useState(false);

  const [filtDecay, setFiltDecay] = useState(synth.filterEnvelope.decay);
  const [incomingFiltDecay, setIncomingFiltDecay] = useState(false);

  const [filtSustain, setFiltSustain] = useState(synth.filterEnvelope.sustain);
  const [incomingFiltSustain, setIncomingFiltSustain] = useState(false);

  const [filtRelease, setFiltRelease] = useState(synth.filterEnvelope.release);
  const [incomingFiltRelease, setIncomingFiltRelease] = useState(false);

  const [cutoff, setCutoff] = useState(synth.filterEnvelope.baseFrequency);
  const [incomingCutoff, setIncomingCutoff] = useState(false);

  const [resonance, setResonance] = useState(synth.filter.Q.value);
  const [incomingResonance, setIncomingResonance] = useState(false);

  const [incomingBroadcast, setIncomingBroadcast] = useState(false);
  const [socketTest, setSocketTest] = useState("");

  useEffect(() => {
    // Update synth using slider values
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
    // If there are no incoming broadcasts, send synth state to server
    if (!incomingWaveform) {
      socket.emit("waveform", waveform);
    }
    if (!incomingUnison) {
      socket.emit("unison", unison);
    }
    if (!incomingCount) {
      socket.emit("count", count);
    }
    if (!incomingAmpAttack) {
      socket.emit("ampAttack", ampAttack);
    }
    if (!incomingAmpDecay) {
      socket.emit("ampDecay", ampDecay);
    }
    if (!incomingAmpSustain) {
      socket.emit("ampSustain", ampSustain);
    }
    if (!incomingAmpRelease) {
      socket.emit("ampRelease", ampRelease);
    }
    if (!incomingFiltAttack) {
      socket.emit("filtAttack", filtAttack);
    }
    if (!incomingFiltDecay) {
      socket.emit("filtDecay", filtDecay);
    }
    if (!incomingFiltSustain) {
      socket.emit("filtSustain", filtSustain);
    }
    if (!incomingFiltRelease) {
      socket.emit("filtRelease", filtRelease);
    }
    if (!incomingCutoff) {
      socket.emit("cutoff", cutoff);
    }
    if (!incomingResonance) {
      socket.emit("resonance", resonance);
    }

    // Set all broadcast checks to false
    setIncomingWaveform(false);
    setIncomingUnison(false);
    setIncomingCount(false);
    setIncomingAmpAttack(false);
    setIncomingAmpDecay(false);
    setIncomingAmpSustain(false);
    setIncomingAmpRelease(false);
    setIncomingFiltAttack(false);
    setIncomingFiltDecay(false);
    setIncomingFiltSustain(false);
    setIncomingFiltRelease(false);
    setIncomingCutoff(false);
    setIncomingResonance(false);

    // retrieve broadcast synth state from server
    socket.on("waveform", (data) => {
      setWaveform(data);
      setIncomingWaveform(true);
    });
    socket.on("unison", (data) => {
      setUnison(data);
      setIncomingUnison(true);
    });
    socket.on("count", (data) => {
      setCount(data);
      setIncomingCount(true);
    });
    socket.on("ampAttack", (data) => {
      setAmpAttack(data);
      setIncomingAmpAttack(true);
    });
    socket.on("ampDecay", (data) => {
      setAmpDecay(data);
      setIncomingAmpDecay(true);
    });
    socket.on("ampSustain", (data) => {
      setAmpSustain(data);
      setIncomingAmpSustain(true);
    });
    socket.on("ampRelease", (data) => {
      setAmpRelease(data);
      setIncomingAmpRelease(true);
    });
    socket.on("filtAttack", (data) => {
      setFiltAttack(data);
      setIncomingFiltAttack(true);
    });
    socket.on("filtDecay", (data) => {
      setFiltDecay(data);
      setIncomingFiltDecay(true);
    });
    socket.on("filtSustain", (data) => {
      setFiltSustain(data);
      setIncomingFiltSustain(true);
    });
    socket.on("filtRelease", (data) => {
      setFiltRelease(data);
      setIncomingFiltRelease(true);
    });
    socket.on("cutoff", (data) => {
      setCutoff(data);
      setIncomingCutoff(true);
    });
    socket.on("resonance", (data) => {
      setResonance(data);
      setIncomingResonance(true);
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
        <h3>Socket Test: {socketTest}</h3>
      </div>
    </>
  );
}
