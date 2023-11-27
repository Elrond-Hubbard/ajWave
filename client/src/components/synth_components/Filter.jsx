import SynthSlider from "./SynthSlider";

export default function Filter(props) {

  return (
    <fieldset>
      <legend>LPF</legend>
      <div className="d-flex flex-column">
        <label>CUTOFF {props.cutoff}</label>
        <SynthSlider
          value={props.cutoff}
          min={20}
          max={2000}
          step={1}
          setValue={props.setCutoff}
        />
        <label>RESONANCE {props.resonance}</label>
        <SynthSlider
          value={props.resonance}
          min={0}
          max={20}
          step={0.1}
          setValue={props.setResonance}
        />
      </div>
    </fieldset>
  );
}
