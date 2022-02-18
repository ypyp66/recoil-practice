import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Blue, Green, Red } from "../../atoms/color";

function Color() {
  const [red, setRed] = useRecoilState(Red);
  const [blue, setBlue] = useRecoilState(Blue);
  const [green, setGreen] = useRecoilState(Green);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }, [red, blue, green]);

  return (
    <div>
      <div>
        <div>
          r : {red}
          <button onClick={() => setRed(red + 5)}> + </button>
          <button onClick={() => setRed(red - 5)}> - </button>
        </div>
        <div>
          g : {green}
          <button onClick={() => setGreen(green + 5)}> + </button>
          <button onClick={() => setGreen(green - 5)}> - </button>
        </div>
        <div>
          b : {blue}
          <button onClick={() => setBlue(blue + 5)}> + </button>
          <button onClick={() => setBlue(blue - 5)}> - </button>
        </div>
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          border: "1px solid gray",
        }}
        ref={divRef}
      ></div>
    </div>
  );
}

export default Color;
