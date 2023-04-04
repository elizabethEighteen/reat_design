import React, { useRef, useState } from "react";
const Index: React.FC<any> = () => {
  const scrollRef = useRef<any>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  console.log(scrollRef)
  console.log(scrollRef?.current)
  const onScroll = () => {
    if (scrollRef?.current) {
      let clientHeight = scrollRef?.current.clientHeight;
      let scrollTop = scrollRef?.current.scrollTop;
      let scrollHeight = scrollRef?.current.scrollHeight;
      setClientHeight(clientHeight);
      setScrollTop(scrollTop);
      setScrollHeight(scrollHeight);
    }
  };
  return (
    <div>
      <div>
        <p>可视区高度：{clientHeight}</p>
        <p>滚动条高度：{scrollTop}</p>
        <p>滚动内容高度： {scrollHeight}</p>
      </div>
      <div style={{height:200,overflowY:'auto'}} ref={scrollRef} onScroll={onScroll}>
        <div style={{height:2000}}></div>
      </div>
    </div>
  );
};

export default Index
