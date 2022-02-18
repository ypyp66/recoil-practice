import { useRecoilState } from "recoil";
import { colorCounterState, COLORS } from "../atoms/box";

export default function Stats() {
  const [colorCounter, setColorCounter] = useRecoilState(colorCounterState);

  return (
    <>
      <div className="stats">
        <div>White: {colorCounter[COLORS.WHITE]}</div>
        <div>Red: {colorCounter[COLORS.RED]}</div>
        <div>Blue: {colorCounter[COLORS.BLUE]}</div>
      </div>
      <div>
        <button onClick={setColorCounter}>Reset</button>
      </div>
    </>
  );
}
