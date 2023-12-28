import { atom } from "recoil";

export const randomState = atom<{
  key: string;
  time: string;
  position: string;
}>({
  key: "randomState",
  default: {
    key: "C",
    time: "4/4",
    position: "0-5",
  },
});

export const randomConfigState = atom<{
  keys: string[];
  times: string[];
  positions: string[];
}>({
  key: "randomConfigState",
  default: {
    keys: ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "B", "E", "A", "D", "G"],
    times: ["4/4", "3/4", "5/4", "7/4"],
    positions: ["0-5", "3-7", "5-9", "7-11"],
  },
});
const keys = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "B", "E", "A", "D", "G"];
const times = ["4/4", "3/4", "5/4", "7/4"];
const positions = ["0-5", "3-7", "5-9", "7-11"];
