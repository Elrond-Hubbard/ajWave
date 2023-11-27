import WaveformSelect from "../components/synth_components/WaveformSelect";
import UnisonSelect from "../components/synth_components/UnisonSelect";
import AmpEnvelope from "../components/synth_components/AmpEnvelope";
import FilterEnvelope from "../components/synth_components/FilterEnvelope";
import Filter from "../components/synth_components/Filter";

import "./Synthesizer.css"

export default function Synthesizer(props) {
  return (
    <>
      <div id="synthesizer" className="col-12 col-xl-4 p-5 m-3" style={props.style}>
        <h2 className="text-center">{props.title}</h2>
        {/* OSCILLATOR */}
        <section className="pb-3 d-flex flex-row">
          <WaveformSelect />
          <div className="col-4"></div>
          <UnisonSelect />
        </section>
        {/* ENVELOPE */}
        <section className="d-flex pb-3">
          <AmpEnvelope />
          <FilterEnvelope />
        </section>
        {/* FILTER */}
        <section className="pb-3">
          <Filter />
        </section>
      </div>
    </>
  );
}
