import { atom } from "recoil";

export const Red = atom({
  key: "redValue",
  default: 100,
});

export const Green = atom({
  key: "greenValue",
  default: 100,
});

export const Blue = atom({
  key: "blueValue",
  default: 100,
});
