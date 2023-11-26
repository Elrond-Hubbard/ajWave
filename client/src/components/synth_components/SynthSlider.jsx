import * as Slider from "@radix-ui/react-slider";

import "./SynthSlider.css"

export default function SynthSlider(props) {
  return (
    <form>
      <Slider.Root
        className="SliderRoot"
        value={[props.value]}
        defaultValue={[props.defaultValue || 50]}
        max={props.max} 
        min={props.min}
        step={1}
        onValueChange={props.onValueChange}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  );
}
