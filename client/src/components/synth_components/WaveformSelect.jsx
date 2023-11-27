import * as RadioGroup from "@radix-ui/react-radio-group"

import "./Radio.css"

export default function WaveformSelect(props) {
  function onChangeValue(event) {
    props.setWaveform(event.target.value);
    console.log(event.target.value);
  }

  return (
    <fieldset className="col-4">
      <legend>SHAPE</legend>
      <RadioGroup.Root
        className="RadioGroupRoot"
        aria-label="View density"
        value={props.waveform} 
        onValueChange={(newValue) => props.setWaveform(newValue)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value="fatsine" id="r1">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
            SIN
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value="fatsquare" id="r2">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
            SQR
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value="fatsawtooth" id="r3">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r3">
            SAW
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value="fattriangle" id="r4">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r4">
            TRI
          </label>
        </div>
      </RadioGroup.Root>
    </fieldset>
  );
}
