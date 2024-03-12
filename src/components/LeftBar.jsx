import React from 'react';
import NodeOptions from './../constants/NodeOptions';
const LeftBar = ({ nodes, addNode, setSelectedNode, setSelectedScreen, showNodeTypes, setShowNodeTypes }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10, backgroundColor: '#2c2c2c', borderRadius: 5, minWidth: 200 }}>
            <button onClick={() => setShowNodeTypes(!showNodeTypes)}>Add Node</button>
            {
                showNodeTypes && (
                    NodeOptions.map((option, index) => (
                        <button key={index} onClick={() => addNode(option.type)}>{option.type}</button>
                    ))
                )
            }
            <span style={{ color: 'white', fontWeight: 'bold' }}>Navigations</span>
            {nodes.filter(node => node.type === 'navigation' || node.type === 'tab').map((node, index) =>
                <button key={index} onClick={() => setSelectedNode(node)}>{node.data.fields[0].value}</button>
            )}
            <span style={{ color: 'white', fontWeight: 'bold' }}>Screens</span>
            {nodes.filter(node => node.type === 'screen').map((node, index) => (
                <button key={index} onClick={() => setSelectedScreen(node)}>{node.data.fields[0].value}</button>
            ))}
            <span style={{ color: 'white', fontWeight: 'bold' }}>Components</span>
            {nodes.filter(node => !['navigation', 'screen', 'tab'].includes(node.type)).map((node, index) => (
                <button key={index} onClick={() => setSelectedNode(node)}>{node.data.fields[0].value}</button>
            ))}
        </div>
    )
}

export default LeftBar;