import { atom } from "recoil";
import { getRandomChord } from "../lib/music";

export const chordQuizState = atom({
  key: "chordQuizState",
  default: getRandomChord(),
});

export const chordQuizSettingState = atom({
  key: "chordQuizSettingState",
  default: {
    shuffle: false,
  },
});
