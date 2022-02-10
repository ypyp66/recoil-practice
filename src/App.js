import React from "react";
import Counter from "./components/Counter";
import ReadOnlyCounter from "./components/ReadOnlyCounter";
import RecoilStarCount from "./components/RecoilStarCount";
import SelectorCount from "./components/SelectorCount";

function App() {
  return (
    <>
      {/* <Counter />
      <ReadOnlyCounter /> 
      <SelectorCount />*/}
      <React.Suspense fallback={<div>로딩중입니다.</div>}>
        <RecoilStarCount />
      </React.Suspense>
    </>
  );
}

export default App;
