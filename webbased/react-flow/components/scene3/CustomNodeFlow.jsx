import React, { useState, useEffect, useCallback } from 'react';

import ReactFlow, {
  isEdge,
  removeElements,
  addEdge,
  MiniMap,
  Controls,
} from 'react-flow-renderer';

import ColorSelectorNode from './ColorSelectorNode';

// import './index.css';

const onNodeDragStop = (event, node) => console.log('drag stop', node);
const onElementClick = (event, element) => console.log('click', element);

const initBgColor = '#1A192B';
const initCounter = 4;

const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const CustomNodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
  const [myCounter, setCounter] = useState(initCounter);

  useEffect(() => {
    const onChange = (event) => {
      setElements((els) =>
        els.map((e) => {
          if (isEdge(e) || e.id !== '2') {
            return e;
          }

          console.log(e)
          
          const mycolor = event.target.value;

          setBgColor(mycolor);

          return {
            ...e,
            data: {
              ...e.data,
              mycolor,
            },
          };
        })
      );
    };

    const onClick = (event) => {
      setElements((els) =>
        els.map((e) => {
          if (isEdge(e) || e.id !== '2') {
            return e;
          }

          console.log(e)

          const newCounter = 88;

          setCounter(newCounter);
          
          return {
            ...e,
            data: {
              ...e.data,
              myCounter:myCounter
            },
          };
        })
      );
    };

    setElements([
      {
        id: '2',
        type: 'selectorNode',
        data: { onChange: onChange, color: initBgColor, onClick: onClick, myCounter: myCounter },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 300, y: 50 },
      },
    ]);
  }, []);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, els)
      ),
    []
  );

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log('flow loaded:', rfi);
      }
    },
    [reactflowInstance]
  );

  return (
    <div style={{ height: 500}}>
      <ReactFlow
        elements={elements}
        onElementClick={onElementClick}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        style={{ background: bgColor }}
        onLoad={onLoad}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultZoom={1.5}
      >
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;