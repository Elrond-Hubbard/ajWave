import { Box } from "@radix-ui/themes";
import * as Slider from "@radix-ui/react-slider";

import "./index.css"

export default function Synth() {
  return (
    <>

        <h1>SYNTH</h1>



        <input type="range"></input>


        <form>
          <Slider.Root
            className="SliderRoot"
            defaultValue={[50]}
            max={100}
            step={1}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
        </form>




    </>
  );
}
