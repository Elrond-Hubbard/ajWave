import "./index.css";

import Synthesizer from "../components/Synthesizer";

export default function Workstation() {
  return (
    <>
      <div className="px-5 d-flex justify-content-center">
        {/* <Synthesizer title="FM SYNTH" style={{background: "lightsalmon"}}/> */}
        <Synthesizer title="MONOSYNTH" style={{background: "lightblue"}}/>
        {/* <Synthesizer title="AM SYNTH" style={{background: "lightgreen"}}/> */}
      </div>
    </>
  );
}
