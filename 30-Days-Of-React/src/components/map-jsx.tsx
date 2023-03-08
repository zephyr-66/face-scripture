import React from "react";

type NumberType = {
  numbers: Array<number>;
};
const Numbers: React.FC<NumberType> = ({ numbers }) => {
  const list = numbers.map((number) => <li key={number}>{number}</li>);
  return <ul>{list}</ul>;
};

type mapJsxType = {
  number?: number;
};
const compare = (pre: mapJsxType, next: mapJsxType) => {
  console.log(pre.number === next.number);
  return pre.number === next.number;
};

// React.memo(Component, compare(preProps, nextProps)); 高阶组件
// 参数1:组件,参数2:比较新旧props,返回true则跳过更新
export default React.memo(({ number }) => {
  console.log("map-jsx被渲染了");
  return (
    <div className="container">
      <div>
        <h1>Numbers List{number}</h1>
        <Numbers numbers={[1, 2, 3, 4, 5, 6]} />
      </div>
    </div>
  );
}, compare);
