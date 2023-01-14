import { atom } from "recoil";

export const footerState = atom({
  key: "footerState",
  default: {
    InHome: false,
    InAdd: false,
    InPlay: false,
    InUser: false,
  },
});
