import * as RadioGroup from "@radix-ui/react-radio-group";
import SynthSlider from "./SynthSlider";
import "./Radio.css";

export default function UnisonSelect(props) {
  return (
    <fieldset className="d-flex flex-column align-items-end text-end col-4">
      <legend>UNISON</legend>
      <RadioGroup.Root
        className="RadioGroupRoot"
        defaultValue={1}
        aria-label="View density"
        value={props.count} 
        onValueChange={(newValue) => props.setCount(newValue)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item
            className="RadioGroupItem"
            value={1}
            id="unison-r1"
          >
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="unison-r1">
            1
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value={3} id="unison-r2">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="unison-r2">
            3
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value={5} id="unison-r3">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="unison-r3">
            5
          </label>
        </div>
      </RadioGroup.Root>
      <SynthSlider />
    </fieldset>
  );
}
