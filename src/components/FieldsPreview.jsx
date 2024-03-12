const FieldsPreview = ({ selectedNode, setSelectedNode }) => {
    const handleStyleChange = (field, value) => {
        const newFields = [...selectedNode.data.fields];
        newFields[field].value = value;
        setSelectedNode({ ...selectedNode, data: { ...selectedNode.data, fields: newFields } });
    }

    const handleSubStyleChange = (field, subField, value) => {
        const newFields = [...selectedNode.data.fields];
        newFields[field].fields[subField].value = value;
        setSelectedNode({ ...selectedNode, data: { ...selectedNode.data, fields: newFields } });
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10, backgroundColor: '#2c2c2c', borderRadius: 5, minWidth: 200 }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Fields</span>
            {selectedNode.data.fields.map((field, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <span style={{ color: 'white' }}>{field.name}</span>
                    {field.type !== 'object' && <input type="text" style={{ padding: 10, borderRadius: 10 }} value={field.value}
                        onChange={(e) => handleStyleChange(index, e.target.value)}
                    />}
                    {field.type === 'object' && field.fields.map((subField, subIndex) => (
                        <div key={subIndex} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <span style={{ color: 'white' }}>{subField.name}</span>
                            <input type="text" style={{ padding: 10, borderRadius: 10 }} value={subField.value}
                                onChange={(e) => handleSubStyleChange(index, subIndex, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default FieldsPreview;