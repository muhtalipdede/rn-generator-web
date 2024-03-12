import DevicePreview from './DevicePreview';
import FieldsPreview from './FieldsPreview';

const RightBar = ({ selectedNode, setSelectedNode, selectedScreen, showDevicePreview, showFields, nodes, edges, renderSubChild }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10 }}>
            {selectedScreen.type === 'screen' && showDevicePreview && (
                <DevicePreview selectedScreen={selectedScreen} nodes={nodes} edges={edges} renderSubChild={renderSubChild} />
            )}
            {showFields && (
                <FieldsPreview selectedNode={selectedNode} setSelectedNode={setSelectedNode} />
            )}
        </div>
    )
}

export default RightBar;