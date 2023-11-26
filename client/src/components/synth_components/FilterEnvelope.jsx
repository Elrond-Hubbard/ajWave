export default function FilterEnvelope() {
  return (
    <fieldset className="col-6 ps-5">
      <legend className="text-center">FILTER ENVELOPE</legend>
      <div className="d-flex flex-column">
        <label>ATTACK</label>
        <input
          id="filter-attack"
          className="form-range"
          type="range"
          value="0.005"
          min="0.005"
          max="2"
          step="0.005"
        />
        <label>DECAY</label>
        <input
          id="filter-decay"
          className="form-range"
          type="range"
          value="0.5"
          min="0.005"
          max="2"
          step="0.005"
        />
        <label>SUSTAIN</label>
        <input
          id="filter-sustain"
          className="form-range"
          type="range"
          value="0.1"
          min="0.005"
          max="1"
          step="0.005"
        />
        <label>RELEASE</label>
        <input
          id="filter-release"
          className="form-range"
          type="range"
          value="1.5"
          min="0.005"
          max="2"
          step="0.005"
        />
      </div>
    </fieldset>
  );
}
