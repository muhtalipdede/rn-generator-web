import React, { useCallback, useState } from 'react';
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
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
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
  const [showDevicePreview, setShowDevicePreview] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [selectedNode, setSelectedNode] = useState(nodes[0]);
  const [selectedScreen, setSelectedScreen] = useState(nodes.filter(node => node.type === 'screen')[0]);

  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find(node => node.id === params.source);
      const targetNode = nodes.find(node => node.id === params.target);

      if (sourceNode.type === 'screen' && targetNode.type === 'navigation') {
        alert('You cannot connect a screen to a navigation node.');
        return;
      }

      if (sourceNode.type === 'screen' && !['view', 'scrollView', 'safeAreaView'].includes(targetNode.type)) {
        alert('You cannot connect a screen to this node.');
        return;
      }

      if (sourceNode.type === 'navigation' && targetNode.type !== 'screen') {
        alert('You cannot connect a navigation to this node.');
        return;
      }

      if (sourceNode.type === 'screen' && ['view', 'scrollView', 'safeAreaView'].includes(targetNode.type) && edges.some(edge => edge.source === sourceNode.id)) {
        alert('You cannot connect a screen to more than one view, scrollview or safeareaview.');
        return;
      }

      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges, nodes, edges],
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
      position: { x: lastNode.position.x, y: lastNode.position.y + 100 },
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
      type: node.type,
      fields: node.data.fields,
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
    setSelectedNode(element);
    if (element.type === 'screen') {
      setSelectedScreen(element);
    }
  }

  const getChildren = (node) => {
    return edges.filter(edge => edge.source === node.id).map(edge => {
      return nodes.filter(node => node.id === edge.target)[0];
    });
  }

  const TextComponent = ({ }) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ color: 'black', fontWeight: 'bold' }}>Text</p>
    </div>
  );

  const InputComponent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="text" style={{ padding: 10, borderRadius: 10 }} />
    </div>
  );

  const ButtonComponent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10 }}>Button</button>
    </div>
  );

  const ImageComponent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src="https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png" alt="logo" />
    </div>
  );

  const ViewComponent = ({ label, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'blue', padding: 10, borderRadius: 10, height: 100, justifyContent: 'center' }}>
      {children && children.map(renderSubChild)}
    </div>
  );

  const renderSubChild = (subChild, subIndex) => {
    switch (subChild.type) {
      case 'text':
        return <TextComponent key={subIndex} />;
      case 'input':
        return <InputComponent key={subIndex} />;
      case 'touchableOpacity':
      case 'button':
        return <ButtonComponent key={subIndex} />;
      case 'image':
        return <ImageComponent key={subIndex} />;
      case 'view':
      case 'scrollView':
      case 'safeAreaView':
        return <ViewComponent key={subIndex} children={getChildren(subChild)} />;
      default:
        return (
          <div key={subIndex} style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ color: 'white', fontWeight: 'bold' }}>{subChild.data.label}</p>
            {subChild.children && subChild.children.map(renderSubChild)}
          </div>
        );
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 0, zIndex: 4, width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#2c2c2c' }}>
        <Header 
          setShowFields={setShowFields} 
          showFields={showFields} 
          setShowDevicePreview={setShowDevicePreview} 
          showDevicePreview={showDevicePreview} 
          setShowInfoModal={setShowInfoModal} 
          showInfoModal={showInfoModal} 
          shareLink={shareLink}
          downloadJson={downloadJson}
        />
      </div>
      <div style={{ position: 'absolute', top: 50, zIndex: 4, left: 0 }}>
        <LeftBar 
          nodes={nodes} 
          addNode={addNode} 
          setSelectedNode={setSelectedNode} 
          setSelectedScreen={setSelectedScreen} 
          showNodeTypes={showNodeTypes} 
          setShowNodeTypes={setShowNodeTypes}
        />
      </div>
      <div style={{ position: 'absolute', top: 50, right: 0, zIndex: 4 }}>
        <RightBar 
          selectedNode={selectedNode} 
          setSelectedNode={setSelectedNode}
          selectedScreen={selectedScreen}
          showDevicePreview={showDevicePreview}
          showFields={showFields}
          nodes={nodes}
          edges={edges}
          renderSubChild={renderSubChild}
          addChild={addNode}
        />
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