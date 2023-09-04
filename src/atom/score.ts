import { atom } from "recoil";

export const scoreState = atom<{
  total: number;
  success: number;
}>({
  key: "scoreState",
  default: {
    total: 0,
    success: 0,
  },
});
