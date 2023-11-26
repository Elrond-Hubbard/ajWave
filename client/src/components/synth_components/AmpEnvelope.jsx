import SynthSlider from "./SynthSlider";

export default function AmpEnvelope() {
  return (
    <fieldset className="col-6">
      <legend className="text-center">AMPLITUDE</legend>
      <div className="pe-5 d-flex flex-column">
        <label>ATTACK</label>
        <SynthSlider />
        <label>DECAY</label>
        <SynthSlider />
        <label>SUSTAIN</label>
        <SynthSlider />
        <label>RELEASE</label>
        <SynthSlider />
      </div>
    </fieldset>
  );
}
