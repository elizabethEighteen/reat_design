import { useState } from "react";
import usePow from "./usePow";

import MockMemo from "./useCallback/index";
import RefComponent from './useRef/index'
import useCreation from "./useCreation";
import useUpdate from "./useUpdate";
import useReactive from "./useReactive";

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
const DocsPage = () => {
  const [flag, setFlag] = useState<boolean>(true);
  const data = usePow([1, 2, 3]);
  return (
    <div>
      <div>数字：{JSON.stringify(data)}</div>
      <div
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        切换
      </div>
      <div>切换状态： {JSON.stringify(flag)}</div>
    </div>
  );
};


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
// const DocsPage = () => {
//   const [,setFlag]  = useState<boolean>(false)
//   const getNowData = ()=>{
//     return Math.random()
//   }
//   const nowData = useCreation(()=>getNowData(),[])
//   return (
//     <div style={{padding:50}}>
//       <div>正常的函数： {getNowData()}</div>
//       <div>useCreation包裹后的:{nowData}</div>
//       <div onClick={()=>{setFlag(v=>!v)}}>渲染</div>
//     </div>
//   );
// };
/*
useUpdate version
**/
// const DocsPage = () => {
//   const update = useUpdate()
//   return (
//     <div style={{padding:50}}>
//      <div>时间：{Date.now()}</div>
//      <div onClick={update}>更新时间</div>
//     </div>
//   );
// };

/*
useReactive version
**/
// const DocsPage = () => {
//   const state = useReactive<any>({
//     count: 0,
//     name: '小杜杜',
//     flag: true,
//     arr: [],
//     bugs: ['小杜杜', 'react', 'hook'],
//     addBug(bug:string) {
//       this.bugs.push(bug);
//     },
//     get bugsCount() {
//       return this.bugs.length;
//     },
//   })

//   return (
//     <div style={{padding: 20}}>
//       <div style={{fontWeight: 'bold'}}>基本使用：</div>
//        <div style={{marginTop: 8}}> 对数字进行操作：{state.count}</div>
//        <div style={{margin: '8px 0', display: 'flex',justifyContent: 'flex-start'}}>
//          <div color='primary' onClick={() => {state.count++;console.log(1)} } >加1</div>
//          <div color='primary' style={{marginLeft: 8}} onClick={() => state.count-- } >减1</div>
//          <div color='primary' style={{marginLeft: 8}} onClick={() => state.count = 7 } >设置为7</div>
//        </div>
//     </div>
//   );


// };
export default DocsPage;
