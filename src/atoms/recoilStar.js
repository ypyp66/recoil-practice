// recoil/recoilStar.js
import { selector } from "recoil";

// 비동기 처리 셀렉터
export const recoilStarCountState = selector({
  key: "asyncState",
  get: () => {
    const response = fetch(
      "https://api.github.com/repos/facebookexperimental/Recoil"
    ).then((res) => res.json());
    // stargazers_count 반환
    return response;
  },
});
