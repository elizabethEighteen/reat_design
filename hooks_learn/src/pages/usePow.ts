// const Index = (list: number[]) => {
//   return list.map((item: number) => {
//     console.log(1);
//     return Math.pow(item, 2);
//   });
// };

import { useMemo } from "react";

const Index = (list: number[]) => {
  return useMemo(() => {
    return list.map((item: number) => {
        // 只会在初始化打印一次
      console.log(1);
      return Math.pow(item, 2);
    });
  }, []);
};
export default Index;
