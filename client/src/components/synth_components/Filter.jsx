import SynthSlider from "./SynthSlider"

export default function Filter() {
    return (
        <fieldset>
        <legend>LPF</legend>
        <div className="d-flex flex-column">
            <label>CUTOFF</label>
            <SynthSlider />
            <label>RESONANCE</label>
            <SynthSlider />
        </div>
    </fieldset>
    )
}