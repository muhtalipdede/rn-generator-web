import DevicePreview from './DevicePreview';
import FieldsPreview from './FieldsPreview';

const RightBar = ({ selectedNode, setSelectedNode, selectedScreen, showDevicePreview, showFields, nodes, edges, renderSubChild, addChild }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10, padding: 10 }}>
            {selectedScreen.type === 'screen' && showDevicePreview && (
                <div style={{ display: 'flex', width: 300, height: 600, border: '1px solid #000', overflow: 'auto' }}>
                    <DevicePreview selectedScreen={selectedScreen} nodes={nodes} edges={edges} renderSubChild={renderSubChild} />
                </div>
            )}
            {showFields && (
                <FieldsPreview selectedNode={selectedNode} setSelectedNode={setSelectedNode} nodes={nodes} edges={edges} addChild={addChild} />
            )}
        </div>
    )
}

export default RightBar;