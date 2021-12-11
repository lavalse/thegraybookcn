import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <div>
        My Counter: <strong>{data.myCounter}</strong>
      </div>
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      <button onClick={data.onClick}>click</button>
    </>
  );
});