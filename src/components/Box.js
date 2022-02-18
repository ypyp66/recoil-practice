import { useRecoilState, useRecoilValue } from "recoil";
import { boxState, colorState } from "../atoms/box";

export default function Box({ id }) {
  const [box, setBox] = useRecoilState(boxState(id));
  const color = useRecoilValue(colorState);
  const setColor = () => {
    setBox(color);
  };

  console.log(box, boxState(id));

  return <div className="box" style={{ background: box }} onClick={setColor} />;
}
