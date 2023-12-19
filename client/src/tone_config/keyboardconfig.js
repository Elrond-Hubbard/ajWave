import AudioKeys from "audiokeys";

const keyboard = new AudioKeys({
  rows: 2,
  polyphony: 1,
  priority: "last",
  octave: -2,
});

export default keyboard;