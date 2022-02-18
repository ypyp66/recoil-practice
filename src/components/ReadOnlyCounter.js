import { useRecoilValue } from "recoil";
import { countState } from "../atoms/count";

function ReadOnlyCounter() {
  const count = useRecoilValue(countState);

  return (
    <div>
      <h1>ReadOnly</h1>
      {count}
    </div>
  );
}

export default ReadOnlyCounter;
