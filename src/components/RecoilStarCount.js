import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { recoilStarCountState } from "../atoms/recoilStar";

function RecoilStarCount() {
  // const recoilProjectInfo = useRecoilValue(recoilStarCountState);
  // const count = recoilProjectInfo["stargazers_count"];
  const recoilProjectInfo = useRecoilValueLoadable(recoilStarCountState);
  const test = useRecoilStateLoadable(recoilStarCountState);
  const count = recoilProjectInfo["stargazers_count"];

  console.log(test);

  if (recoilProjectInfo.state === "loading") {
    return <div>로딩중</div>;
  }

  return (
    <>
      <p>recoil gitbub star 갯수 </p>
      <p>{count}개</p>
    </>
  );
}

export default RecoilStarCount;
