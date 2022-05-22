import { useNavigate } from "react-router-dom";

function Young3()  {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
        <h1>그의 나이 26세</h1>
      <button onClick={handleClick}>이전화면으로</button>
    </div>
  );
}

export default Young3;