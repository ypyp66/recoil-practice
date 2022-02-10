// recoil/recoilStar.js
import { selector } from "recoil";

// 비동기 처리 셀렉터
export const recoilStarCountState = selector({
  key: "asyncState",
  get: async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebookexperimental/ypyp66"
    );
    const recoilProjectInfo = await response.json();
    // stargazers_count 반환
    return recoilProjectInfo["stargazers_count"];
  },
});
