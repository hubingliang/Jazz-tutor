import { atom } from "recoil";
import { getRandomChord } from "../lib/music";

export const chordQuizState = atom({
  key: "chordQuizState",
  default: getRandomChord(),
});
