import { useState } from "react";
import usePow from "./usePow";

import MockMemo from "./useCallback/index";
import RefComponent from './useRef/index'
import useCreation from "./useCreation";

/*
first version
**/
// const DocsPage = () => {
//   return (
//     <div>
//       <p>This is umi docs.</p>
//     </div>
//   );
// };

/*
usePow version
**/
// const DocsPage = () => {
//   const [flag, setFlag] = useState<boolean>(true);
//   const data = usePow([1, 2, 3]);
//   return (
//     <div>
//       <div>数字：{JSON.stringify(data)}</div>
//       <div
//         onClick={() => {
//           setFlag((v) => !v);
//         }}
//       >
//         切换
//       </div>
//       <div>切换状态： {JSON.stringify(flag)}</div>
//     </div>
//   );
// };


/*
useCallback version
**/
// const DocsPage = () => {
  
//   return (
//     <MockMemo></MockMemo>
//   );
// };


/*
useRef version
**/
// const DocsPage = () => {
  
//   return (
//     <RefComponent></RefComponent>
//   );
// };
/*
useCreation version
**/
const DocsPage = () => {
  const [,setFlag]  = useState<boolean>(false)
  const getNowData = ()=>{
    return Math.random()
  }
  const nowData = useCreation(()=>getNowData(),[])
  return (
    <div style={{padding:50}}>
      <div>正常的函数： {getNowData()}</div>
      <div>useCreation包裹后的:{nowData}</div>
      <div onClick={()=>{setFlag(v=>!v)}}>渲染</div>
    </div>
  );
};
export default DocsPage;
