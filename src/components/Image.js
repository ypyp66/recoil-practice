import React from "react";
import { useRecoilState } from "recoil";
import { imageState } from "../atoms/image";

function Image() {
  const [state, setState] = useRecoilState(imageState);

  console.log(state);
  return <div>Image</div>;
}

export default Image;
