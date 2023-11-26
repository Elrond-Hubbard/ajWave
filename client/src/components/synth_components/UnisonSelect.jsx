import SynthSlider from "./SynthSlider"

export default function UnisonSelect() {
  return (
    <fieldset className="d-flex flex-column align-items-end text-end col-4">
      <legend>UNISON</legend>
      <div className="form-check">
        <input
          id="count-1"
          className="form-check-input"
          value="1"
          type="radio"
          name="count"
        />
        <label className="form-check-label">1</label>
      </div>
      <div className="form-check">
        <input
          id="count-3"
          className="form-check-input"
          value="3"
          type="radio"
          name="count"
        />
        <label className="form-check-label">3</label>
      </div>
      <div className="form-check">
        <input
          id="count-5"
          className="form-check-input"
          value="5"
          type="radio"
          name="count"
        />
        <label className="form-check-label">5</label>
      </div>
      <SynthSlider />
    </fieldset>
  );
}
