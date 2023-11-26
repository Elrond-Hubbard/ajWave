import "./index.css";

import Synthesizer from "../components/Synthesizer";

export default function Workstation() {
  return (
    <>
      <div className="border d-flex justify-content-center">
        <Synthesizer title="FM SYNTH" />
        <Synthesizer title="MONOSYNTH"/>
        <Synthesizer title="AM SYNTH"/>
      </div>
    </>
  );
}
