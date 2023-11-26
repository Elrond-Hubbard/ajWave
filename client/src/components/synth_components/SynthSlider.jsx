import * as Slider from "@radix-ui/react-slider";

import "./SynthSlider.css"

export default function SynthSlider() {
  return (
    <form className="w-100">
      <Slider.Root
        className="SliderRoot"
        defaultValue={[50]}
        max={100} 
        min={1}
        step={1}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  );
}
