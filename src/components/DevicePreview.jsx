const DevicePreview = ({ selectedScreen, nodes, edges, renderSubChild }) => {
    const getChildren = (node) => {
        return edges.filter(edge => edge.source === node.id).map(edge => {
            return nodes.filter(node => node.id === edge.target)[0];
        });
    }
    const convertStyleForHtml = (fields) => {
        if (!fields) {
            return {};
        }
        let style = {};
        fields.forEach(field => {
            if (field.name === 'backgroundColor') {
                style.backgroundColor = field.value;
            }
            if (field.name === 'fontSize') {
                style.fontSize = field.value;
            }
            if (field.name === 'fontWeight') {
                style.fontWeight = field.value;
            }
            if (field.name === 'textAlign') {
                style.textAlign = field.value;
            }
            if (field.name === 'padding') {
                style.padding = field.value;
            }
            if (field.name === 'paddingTop') {
                style.paddingTop = field.value;
            }
            if (field.name === 'flex') {
                style.flex = field.value;
            }
            if (field.name === 'flexDirection') {
                style.flexDirection = field.value;
            }
            if (field.name === 'justifyContent') {
                style.justifyContent = field.value;
            }
            if (field.name === 'alignItems') {
                style.alignItems = field.value;
            }
            if (field.name === 'gap') {
                style.gap = field.value;
            }
            if (field.name === 'borderColor') {
                style.borderColor = field.value;
            }
            if (field.name === 'borderWidth') {
                style.borderWidth = field.value;
            }
            if (field.name === 'borderRadius') {
                style.borderRadius = field.value;
            }
            if (field.name === 'shadowColor') {
                style.shadowColor = field.value;
            }
        });
        return style;
    }
    const children = getChildren(selectedScreen);
    if (children.length === 1) {
        console.log('children[0].data', children[0].data);
        const frameFields = children[0].data.fields.filter(field => field.name === 'style')[0].fields;
        const style = convertStyleForHtml(frameFields);
        console.log('style', style);
        return (
            <div style={{ ...style, display: 'flex' }}>
                {getChildren(children[0]).map(renderSubChild)}
            </div>
        );
    }
};

export default DevicePreview;