import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import {
  NavigationNode,
  ScreenNode,
  TabNode,
  SafeAreaViewNode,
  ViewNode,
  ScrollViewNode,
  TextNode,
  InputNode,
  TouchableOpacityNode,
  ButtonNode,
  ImageNode
} from './components/Nodes';
import NodeOptions from './constants/NodeOptions';
import initialNodes from './constants/InitialNodes';
import initialEdges from './constants/InitialEdges';
import 'reactflow/dist/style.css';


const nodeTypes = {
  navigation: NavigationNode,
  screen: ScreenNode,
  tab: TabNode,
  safeAreaView: SafeAreaViewNode,
  view: ViewNode,
  scrollView: ScrollViewNode,
  text: TextNode,
  input: InputNode,
  touchableOpacity: TouchableOpacityNode,
  button: ButtonNode,
  image: ImageNode,
  // flatList: FlatListNode,
  // sectionList: SectionListNode
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showNodeTypes, setShowNodeTypes] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState(nodes[0]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const addNode = (type) => {
    let lastNode = nodes[nodes.length - 1];
    if (!lastNode) {
      lastNode = { position: { x: 0, y: 0 } };
    }
    if (NodeOptions.filter(option => option.type === type).length === 0) {
      alert('Node type not supported, please select another type.');
      return;
    }
    const newNode = {
      id: (parseInt(lastNode.id) + 1).toString(),
      position: { x: lastNode.position.x + 100, y: lastNode.position.y + 100 },
      type: type,
      data: { label: type, fields: NodeOptions.filter(option => option.type === type)[0].fields }
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

  const onElementClick = (event, element) => {
    console.log(element);
    setSelectedNode(element);
  }

  const removeNode = (node) => {
    setNodes((prevNodes) => prevNodes.filter(n => n.id !== node.id));
    setEdges((prevEdges) => prevEdges.filter(e => e.source !== node.id && e.target !== node.id));
    setSelectedNode(null);
  }

  const getChildren = (node) => {
    return edges.filter(edge => edge.source === node.id).map(edge => {
      return nodes.filter(node => node.id === edge.target)[0];
    });
  }

  const DevicePreview = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10, width: 300, height: 600, backgroundColor: 'black', borderRadius: 20 }}>
        {getChildren(selectedNode).map((child, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: 'black', borderRadius: 20 }}>
            {getChildren(child).map((subChild, subIndex) => (
              subChild.type === 'text' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: 'white', fontWeight: 'bold' }}>{subChild.data.label}</p>
                </div>
              ) : (subChild.type === 'input' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                  <input type="text" style={{ backgroundColor: 'white', color: 'black', height: 20, borderRadius: 10, padding: 10 }} />
                </div>
              ) : (subChild.type === 'touchableOpacity' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                  <button style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10 }}>Button</button>
                </div>
              ) : (subChild.type === 'button' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                  <button style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10 }}>Button</button>
                </div>
              ) : (subChild.type === 'image' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png" alt="logo" />
                </div>
              ) : (subChild.type === 'view' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'blue', padding: 10, borderRadius: 10, height: 100, justifyContent: 'center' }}>
                  <p style={{ color: 'white', fontWeight: 'bold' }}>{subChild.data.label}</p>
                </div>
              ) : (subChild.type === 'scrollView' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'blue', padding: 10, borderRadius: 10, height: 100, justifyContent: 'center' }}>
                  <p style={{ color: 'white', fontWeight: 'bold' }}>{subChild.data.label}</p>
                </div>
              ) : (subChild.type === 'safeAreaView' ? (
                <div key={subIndex} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'blue', padding: 10, borderRadius: 10, height: 100, justifyContent: 'center' }}>
                  <p style={{ color: 'white', fontWeight: 'bold' }}>{subChild.data.label}</p>
                </div>
              ) : (<div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: 'white', fontWeight: 'bold' }}>{subChild.data.label}</p>
              </div>))))))))))}
          </div>
        ))}
      </div>
    )
  }

  const RightBar = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10 }}>
        {selectedNode && (
          selectedNode.type !== 'screen' ? (
            <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <p style={{ color: 'white', fontWeight: 'bold' }}>{selectedNode.data.label}</p>
              {selectedNode.data.fields.map((field, index) => (
                field.type === 'object' ? (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'black', padding: 5 }}>
                      {field.name}
                    </p>
                    {field.fields.map((subField, subIndex) => (
                      <div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ color: 'white', fontWeight: 'bold' }}>{subField.name}</p>
                        <input type="text" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'black', padding: 5 }}>
                      {field.name}
                    </p>
                    <input type="text" />
                  </div>
                )
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                <button onClick={() => removeNode(selectedNode)}>Remove Node</button>
              </div>
            </div>) : (
            <DevicePreview />
          )
        )}
      </div>
    )
  }

  const LeftBar = () => {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 4, display: 'flex', flexDirection: 'column', backgroundColor: '#2c2c2c', height: '100vh', gap: 10, padding: 10 }}>
        {NodeOptions.map((type) => (
          <a key={type.type} onClick={() => addNode(type.type)} style={{ color: 'white', cursor: 'pointer' }}>
            {type.name}
          </a>
        ))}
      </div>
    )
  }

  const handleProfile = () => {
    console.log('profile');
  }

  const Header = () => {
    return <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 10 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={shareLink}>
          <i className="fas fa-share-alt"></i>
        </button>
        <button onClick={downloadJson}>
          <i className="fas fa-download"></i>
        </button>
        <button onClick={() => setShowInfoModal(!showInfoModal)}>
          <i className="fas fa-info"></i>
        </button>
      </div>
      <div>
        <button onClick={handleProfile}>
          <i className="fas fa-user"></i>
        </button>
      </div>
    </div>
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 0, zIndex: 4, width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#2c2c2c' }}>
        <Header />
      </div>
      <div style={{ position: 'absolute', top: 50, zIndex: 4, display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: '#2c2c2c', borderRadius: 5 }}>
        <LeftBar />
      </div>
      <div style={{ position: 'absolute', top: 50, right: 0, zIndex: 4, display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: '#2c2c2c', borderRadius: 5 }}>
        <RightBar />
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView="true"
        onNodeClick={onElementClick}
      >
        {showNodeTypes && (
          <div style={{ position: 'absolute', top: 50, left: 10, zIndex: 4, display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: '#2c2c2c', borderRadius: 5 }}>
            {NodeOptions.map((type) => (
              <button key={type.type} onClick={() => addNode(type.type)}>{type.name}</button>
            ))}
          </div>
        )}
        {showInfoModal && (
          <div style={{ position: 'absolute', top: 50, left: 190, zIndex: 4, display: 'flex', flexDirection: 'column', backgroundColor: '#2c2c2c', borderRadius: 5 }}>
            <p style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>React Native Generator</p>
            <p style={{ textAlign: 'center', color: 'black' }}>You can create a flow chart of your React Native app and download the JSON file to use in the React Native Generator app.
              Click on the plus button to add a new node.
              Click on the download button to download the JSON file. You can use this JSON file in the React Native Generator app.
              You can use the
              <a style={{ color: 'blue' }} href="https://www.npmjs.com/package/@muhtalipdede/rn-generator" target="_blank">
                npx @muhtalipdede/rn-generator@latest [ProjectName]
              </a>
              command to generate the React Native code.
              lick on the share button to share the link of the flow chart.
            </p>
            <p style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Muhtalip Dede - 2024</p>
            <p style={{ textAlign: 'center', color: 'black' }}> <a style={{ color: 'blue' }} href="https://muhtalipdede.github.io" target="_blank">muhtalipdede.github.io</a></p>
          </div>
        )}
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}