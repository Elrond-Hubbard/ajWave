import { useState } from "react";

import * as Slider from "@radix-ui/react-slider";

import "./SynthSlider.css"

export default function SynthSlider() {

  const [value, setValue] = useState(50)

  return (
    <form className="w-100">
      <p>{value}</p>
      <Slider.Root
        className="SliderRoot"
        value={[value]}
        max={100} 
        min={1}
        step={1} 
        onValueChange={(newValue) => setValue(newValue)}

      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  );
}
