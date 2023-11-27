import SynthSlider from "./SynthSlider";

export default function AmpEnvelope(props) {
  return (
    <fieldset className="col-6">
      <legend className="text-center">AMPLITUDE</legend>
      <div className="pe-4 d-flex flex-column">
        <label>ATTACK {props.ampAttack}</label>
        <SynthSlider
          value={props.ampAttack}
          min={0.005}
          max={2}
          step={0.005}
          setValue={props.setAmpAttack}
        />
        <label>DECAY {props.ampDecay}</label>
        <SynthSlider
          value={props.ampDecay}
          min={0.005}
          max={2}
          step={0.005}
          setValue={props.setAmpDecay}
        />
        <label>SUSTAIN {props.ampSustain}</label>
        <SynthSlider
          value={props.ampSustain}
          min={0.005}
          max={1}
          step={0.005}
          setValue={props.setAmpSustain}
        />
        <label>RELEASE {props.ampRelease}</label>
        <SynthSlider
          value={props.ampRelease}
          min={0.005}
          max={2}
          step={0.005}
          setValue={props.setAmpRelease}
        />
      </div>
    </fieldset>
  );
}
