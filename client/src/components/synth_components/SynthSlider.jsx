import { useState } from "react";

import * as Slider from "@radix-ui/react-slider";

import "./SynthSlider.css";

export default function SynthSlider(props) {

  return (
    <form className="w-100">
      <Slider.Root
        className="SliderRoot"
        value={[props.value]}
        min={props.min}
        max={props.max}
        step={props.step || 1}
        onValueChange={(newValue) => props.setValue(newValue[0])}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  );
}
