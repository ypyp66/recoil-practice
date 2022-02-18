import { BOX_NUM } from "../atoms/box";
import Box from "./Box";

export default function Grid() {
  let boxes = [];
  for (let i = 0; i < BOX_NUM; i++) {
    boxes.push(i);
  }
  return (
    <>
      <h2>Press on boxes to color:</h2>
      <div className="grid">
        {boxes.map((v, i) => (
          <Box key={i} className="box" id={i} />
        ))}
      </div>
    </>
  );
}
