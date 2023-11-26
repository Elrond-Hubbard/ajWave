export default function WaveformSelect() {
  return (
    <fieldset className="col-4">
      <legend>SHAPE</legend>
      <div className="form-check">
        <input
          id="sine"
          className="form-check-input"
          value="fatsine"
          type="radio"
          name="waveform"
        />
        <label className="form-check-label">SIN</label>
      </div>
      <div className="form-check">
        <input
          id="square"
          className="form-check-input"
          value="fatsquare"
          type="radio"
          name="waveform"
        />
        <label className="form-check-label">SQR</label>
      </div>
      <div className="form-check">
        <input
          id="sawtooth"
          className="form-check-input"
          value="fatsawtooth"
          type="radio"
          name="waveform"
        />
        <label className="form-check-label">SAW</label>
      </div>
      <div className="form-check">
        <input
          id="triangle"
          className="form-check-input"
          value="fattriangle"
          type="radio"
          name="waveform"
        />
        <label className="form-check-label">TRI</label>
      </div>
    </fieldset>
  );
}
