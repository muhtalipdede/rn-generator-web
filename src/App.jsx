import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import { NavigationNode, ScreenNode } from './components/Nodes';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'App' }, type: 'navigation' },
  { id: '2', position: { x: -200, y: 100 }, data: { label: 'Auth' }, type: 'navigation' },
  { id: '3', position: { x: 200, y: 100 }, data: { label: 'Home' }, type: 'navigation' },
  { id: '4', position: { x: 200, y: 200 }, data: { label: 'Home' }, type: 'screen' },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
];

const nodeTypes = { navigation: NavigationNode, screen: ScreenNode };

const nodeOptions = [
  {
    type: 'navigation',
    name: 'Navigation',
  },
  // {
  //   type: 'tab',
  //   name: 'Tab',
  // },
  {
    type: 'screen',
    name: 'Screen',
  },
  // {
  //   type: 'safe-area-view',
  //   name: 'SafeAreaView',
  // },
  // {
  //   type: 'input',
  //   name: 'Input',
  // },
  // {
  //   type: 'button',
  //   name: 'Button',
  // },
]

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showNodeTypes, setShowNodeTypes] = useState(false);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const addNode = (type) => {
    let lastNode = nodes[nodes.length - 1];
    if (!lastNode) {
      lastNode = { position: { x: 0, y: 0 } };
    }
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: {
        x: lastNode.position.x,
        y: lastNode.position.y + 50,
      },
      data: { label: (nodes.length + 1).toString() },
      type: type,
    };
    setNodes((prevNodes) => prevNodes.concat(newNode));
    setShowNodeTypes(false);
  }

  const shareLink = () => {
    const url = new URL(window.location);
    navigator.clipboard.writeText(url.href);
  }

  const converToParentChildJson = (node) => {
    const children = edges.filter(edge => edge.source === node.id).map(edge => {
      return converToParentChildJson(nodes.filter(node => node.id === edge.target)[0]);
    });
    return {
      id: node.id,
      name: node.data.label,
      type: node.type,
      children: children
    }
  }

  const downloadJson = () => {
    const data = converToParentChildJson(nodes.filter(node => node.id === '1')[0]);
    console.log([data]);
    const url = window.URL.createObjectURL(new Blob([JSON.stringify([data])]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'rn-generator.json');
    document.body.appendChild(link);
    link.click();
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView="true"
      >
        <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 4, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* <button onClick={() => setNodes([])}>Remove all nodes</button>
          <button onClick={() => setEdges([])}>Remove all edges</button> */}
        </div>
        <button onClick={shareLink} style={{ position: 'absolute', top: 10, left: 10, zIndex: 4 }}>
          <i className="fas fa-share-alt"></i>
        </button>
        <button onClick={() => setShowNodeTypes(!showNodeTypes)} style={{ position: 'absolute', top: 10, left: 70, zIndex: 4 }}>
          <i className="fas fa-plus"></i>
        </button>
        {showNodeTypes && (
          <div style={{ position: 'absolute', top: 50, left: 10, zIndex: 4, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {nodeOptions.map((type) => (
              <button key={type.type} onClick={() => addNode(type.type)}>{type.name}</button>
            ))}
          </div>
        )}
        <button onClick={downloadJson} style={{ position: 'absolute', top: 10, left: 130, zIndex: 4 }}>
          <i className="fas fa-download"></i>
        </button>
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}