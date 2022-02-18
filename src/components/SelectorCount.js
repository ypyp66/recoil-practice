import React from "react";
import { useRecoilState } from "recoil";
import { countInputState, countState, inputState } from "../atoms/count";

function SelectorCount() {
  const [count, setCount] = useRecoilState(countState); // useRecoilState 을 통한 value, setter 반환
  const [input, setInput] = useRecoilState(inputState); // useRecoilState 을 통한 value, setter 반환
  const [countInput, setCountInput] = useRecoilState(countInputState); // useRecoilValue 을 통한 selector 의 get value 반환

  return (
    <div>
      <h2>읽기 쓰기 카운트 컴포넌트</h2>
      <p>카운트 {count}</p>
      <p>selector {countInput}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button onClick={() => setCount(count + Number(input))}>숫자 증가</button>
      <button onClick={() => setCount(count - Number(input))}>숫자 감소</button>
      <button onClick={() => setCountInput("9999")}>
        selector 값 9999로 변경
      </button>
    </div>
  );
}

export default SelectorCount;
