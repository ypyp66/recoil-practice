import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 1,
});

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const countInputState = selector({
  key: "countTitleState",
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(
      inputState
    )} 입니다.`;
  },
  set: ({ set }, newValue) => {
    // 2번째 파라미터 에는 추가로 받을 인자를 나타냅니다.
    set(countState, Number(newValue)); // count atom 수정
    set(inputState, newValue); // input atom 수정
  },
});
