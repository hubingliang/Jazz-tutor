import { atom } from "recoil";

export const answerState = atom<string[]>({
  key: "answerState",
  default: ["", "", "", ""],
});
