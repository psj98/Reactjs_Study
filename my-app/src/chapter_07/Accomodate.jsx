import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 의존성 배열이 없는 경우, 컴포넌트가 업데이트 시 출력
  useEffect(() => {
    console.log("==================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  // 의존성 배열이 있는 경우, count 값이 업데이트 되면 출력
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용`}</p>

      <button onClick={increaseCount}>
        입장
      </button>
      <button onClick={decreaseCount}>
        퇴장
      </button>

      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accomodate;
