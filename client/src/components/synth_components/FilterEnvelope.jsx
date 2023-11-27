import { useState } from "react";

import SynthSlider from "./SynthSlider"

export default function FilterEnvelope() {

  const [attack, setAttack] = useState()
  const [decay, setDecay] = useState()
  const [sustain, setSustain] = useState()
  const [release, setRelease] = useState()

  return (
    <fieldset className="col-6">
      <legend className="text-center">FILTER</legend>
      <div className="ps-4 d-flex flex-column">
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
