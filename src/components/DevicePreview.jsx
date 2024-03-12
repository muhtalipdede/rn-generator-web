const DevicePreview = ({ selectedScreen, nodes, edges, renderSubChild }) => {
    const getChildren = (node) => {
        return edges.filter(edge => edge.source === node.id).map(edge => {
            return nodes.filter(node => node.id === edge.target)[0];
        });
    }
    const convertStyle = (fields) => {
        if (!fields) {
            return {};
        }
        let style = {};
        fields.forEach(field => {
            style[field.name] = field.value;
        });
        return style;
    }
    const children = getChildren(selectedScreen);
    if (children.length === 0) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10, width: 300, height: 600, backgroundColor: 'white', borderRadius: 20 }}>
                <p style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>No children</p>
            </div>
        );
    }
    if (children.length > 2) {
        alert('You can only have 2 children in a screen.');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10, width: 300, height: 600, backgroundColor: 'white', borderRadius: 20 }}>
                <p style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>You can only have 2 children in a screen.</p>
            </div>
        );
    }

    if (children.length === 1) {
        const frameFields = children[0].data.fields[0].fields || [];
        const style = convertStyle(frameFields);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10, width: 300, height: 600, backgroundColor: 'white', borderRadius: 20 }}>
                <div style={{ ...style }}>
                    {getChildren(children[0]).map(renderSubChild)}
                </div>
            </div>
        );
    }
};

export default DevicePreview;