import NodeOptions from "../constants/NodeOptions";
import { useState } from "react";

const FieldsPreview = ({ selectedNode, setSelectedNode, nodes, edges, addChild }) => {
    const [selectedType, setSelectedType] = useState(null);
    const getChildren = (node) => {
        return edges.filter(edge => edge.source === node.id).map(edge => {
            return nodes.filter(node => node.id === edge.target)[0];
        });
    }
    const handleStyleChange = (field, value) => {
        const newFields = JSON.parse(JSON.stringify([...selectedNode.data.fields]));
        newFields[field].value = value;
        setSelectedNode({ ...selectedNode, data: { ...selectedNode.data, fields: newFields } });
    }

    const handleSubStyleChange = (field, subField, value) => {
        const newFields = JSON.parse(JSON.stringify([...selectedNode.data.fields]));
        newFields[field].fields[subField].value = value;
        setSelectedNode({ ...selectedNode, data: { ...selectedNode.data, fields: newFields } });
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10, backgroundColor: '#2c2c2c', borderRadius: 5, minWidth: 200 }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Fields</span>
            {selectedNode.data.fields.map((field, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <span style={{ color: 'white' }}>{field.name}</span>
                    {field.type === 'string' && <input type="text" style={{ padding: 5, borderRadius: 10 }} value={field.value}
                        onChange={(e) => handleStyleChange(index, e.target.value)}
                    />}
                    {field.type === 'number' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={field.value}
                        onChange={(e) => handleStyleChange(index, e.target.value)}
                    />}
                    {field.type === 'object' && field.fields.map((subField, subIndex) => (
                        <div key={subIndex} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <span style={{ color: 'white', fontSize: 12 }}>{subField.name}</span>
                            {subField.name === 'backgroundColor' && <input type="color" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'flex' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'flexDirection' && <select style={{ padding: 10, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            >
                                <option value="row">Row</option>
                                <option value="column">Column</option>
                            </select>}
                            {subField.name === 'justifyContent' && <select style={{ padding: 10, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            >
                                <option value="flex-start">Start</option>
                                <option value="center">Center</option>
                                <option value="flex-end">End</option>
                            </select>}
                            {subField.name === 'alignItems' && <select style={{ padding: 10, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            >
                                <option value="flex-start">Start</option>
                                <option value="center">Center</option>
                                <option value="flex-end">End</option>
                            </select>}
                            {subField.name === 'gap' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'padding' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'paddingTop' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'borderColor' && <input type="color" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'borderWidth' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'borderRadius' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'shadowColor' && <input type="color" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'shadowOffset' && <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.fields[0].value}
                                    onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                                />
                                <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.fields[1].value}
                                    onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                                />
                            </div>}
                            {subField.name === 'shadowOpacity' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'shadowRadius' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'elevation' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'color' && <input type="color" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'fontSize' && <input type="number" style={{ padding: 5, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />}
                            {subField.name === 'fontWeight' && <select style={{ padding: 10, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            >
                                <option value="normal">Normal</option>
                                <option value="bold">Bold</option>
                            </select>}
                            {subField.name === 'textAlign' && <select style={{ padding: 10, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            >
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>}
                        </div>
                    ))}
                </div>
            ))}
            <span style={{ color: 'white', fontWeight: 'bold' }}>Children</span>
            {getChildren(selectedNode).map((child, index) => (
                <button key={index} onClick={() => setSelectedNode(child)}>{child.data.fields[0].value}</button>
            ))}
            <span style={{ color: 'white', fontWeight: 'bold' }}>Add Child</span>
            <select style={{ padding: 10, borderRadius: 10 }} onChange={(e) => setSelectedType(e.target.value)}>
                {NodeOptions.map((option, index) => (
                    <option key={index} value={option.type}>{option.type}</option>
                ))}
            </select>
            <button onClick={() => addChild(selectedType)}>Add</button>
        </div>
    );
}

export default FieldsPreview;