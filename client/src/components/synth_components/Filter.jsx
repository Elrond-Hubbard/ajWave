export default function Filter() {
    return (
        <fieldset>
        <legend>FILTER</legend>
        <div className="d-flex flex-column">
            <label>CUTOFF</label>
            <input id="cutoff" className="form-range" type="range" value="200" min="20" max="2000"/>
            <label>RESONANCE</label>
            <input id="resonance" className="form-range" type="range" value="5" min="0" max="20" step="0.1"/>
        </div>
    </fieldset>
    )
}