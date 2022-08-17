import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const imageUrlsState = atom({
  key: "imageUrlsState",
  default: ["", "", ""],
});

export const filesState = atom({
  key: "filesState",
  default: <File[]>[],
});

export const logState = atom({
  key: "logState",
  default: false,
});

// export const fileState = atom({
//   key: "fileState",
//   default: File,
// });
// export const mapInfoState = atom({
//     key: "mapInfoState",
//     default:{

//     }
// })
