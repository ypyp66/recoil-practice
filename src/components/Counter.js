import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { countState } from "../recoil/count";

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  const setCountUseSetRecoilState = useSetRecoilState(countState);
  const resetCount = useResetRecoilState(countState);

  return (
    <div>
      <h1>Counter</h1>

      {count}
      <br />
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setCountUseSetRecoilState((prev) => prev + 2);
          }}
        >
          +2
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setCountUseSetRecoilState((prev) => prev - 2);
          }}
        >
          -2
        </button>
        <button
          onClick={() => {
            resetCount();
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
