import React,{ useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const MyTitle = () => {
    return(
        <p style={{color:"red"}}>THIS IS A COMPONENT</p>
    )
}

const initialElements  = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div><MyTitle /></div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 100, y: 250 },
  },
  {
    id: '4',
    type: 'output', // output node
    data: { label: 'Output Node 2' },
    position: { x: 300, y: 250 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },

];

export default () => {
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>{
        setElements((els) => removeElements(elementsToRemove, els));
    }
    const onConnect = (params) => {
        setElements((els) => addEdge(params, els));
    }

    return(
        <div style={{ height: 500 }}>
            <ReactFlow 
                elements={elements} 
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                deleteKeyCode={46}    
            />
        </div>
)};