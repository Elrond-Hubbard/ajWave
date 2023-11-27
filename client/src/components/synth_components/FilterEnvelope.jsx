import SynthSlider from "./SynthSlider";

export default function FilterEnvelope(props) {
  return (
    <fieldset className="col-6">
      <legend className="text-center">FILTER</legend>
      <div className="ps-4 d-flex flex-column">
        <label>ATTACK {props.filtAttack}</label>
        <SynthSlider
          value={props.filtAttack}
          min={0.005}
          max={2}
          step={0.005}
          setValue={props.setFiltAttack}
        />
        <label>DECAY {props.filtDecay}</label>
        <SynthSlider
          value={props.filtDecay}
          min={0.005}
          max={2}
          step={0.005}
          setValue={props.setFiltDecay}
        />
        <label>SUSTAIN {props.filtSustain}</label>
        <SynthSlider
          value={props.filtSustain}
          min={0.005}
          max={1}
          step={0.005}
          setValue={props.setFiltSustain}
        />
        <label>RELEASE {props.filtRelease}</label>
        <SynthSlider
          value={props.filtRelease}
          min={0.005}
          max={2}
          step={0.005}
          setValue={props.setFiltRelease}
        />
      </div>
    </fieldset>
  );
}
