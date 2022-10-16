import React, { useEffect, useState } from "react";

function Home() {
  const [list, setList] = useState([
    { name: "스터디" },
    { name: "리액트" },
    { name: "힘들다" },
  ]);

  const addItem = () => {
    setList([{ name: "이성규" }, ...list]);
  };

  const delItem = () => {
    setList(list.filter((l) => l.name != "스터디"));
  };

  return (
    <>
      {/* 추가 버튼과 삭제 버튼*/}
      <input type="button" value="추가" onClick={addItem} />
      <input type="button" value="삭제" onClick={delItem} />

      <h2> 삭제는 어떻게 보일까 </h2>
      {list.map((v, index) => (
        /*  div 태그의 key로 배열의 index 사용*/
        <div key={index}>
          {" "}
          {v.name}, idx: {index} <input type="text" />{" "}
        </div>
      ))}
    </>
  );
}
export default Home;
