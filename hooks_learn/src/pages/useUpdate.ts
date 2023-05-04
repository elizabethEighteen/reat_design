import { useCallback, useState } from "react";
const useUpdate = () => {
  const [, setState] = useState({});
  // return useCallback(() => setState({}), []);
  // 不了解useCallback 机制，记住用usecallback包裹
  return () => setState({});
};

export default useUpdate
