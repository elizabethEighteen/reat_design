import React, { useCallback, useState } from "react";

const TestButton = React.memo((props: any) => {
  console.log(props.title);
  return (
    <div
      onClick={props.onClick}
      style={props.title === "useCallback点击" ? { marginLeft: 20 } : undefined}
    >
      {props.title}
    </div>
  );
});

const MockMemo: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <TestButton
          title="普通点击"
          onClick={() => setCount(count + 1)}
        ></TestButton>
        <TestButton title="useCallback点击" onClick={add}></TestButton>
      </div>
      <div style={{ marginTop: 20 }}>count:{count}</div>
      <div
        onClick={() => {
          setShow(!show);
        }}
      >
        切换
      </div>
    </div>
  );
};

export default MockMemo;
