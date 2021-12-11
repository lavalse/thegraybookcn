import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#f00' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: '#0f0' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#00f' }}
        isConnectable={isConnectable}
      />
    </>
  );
});