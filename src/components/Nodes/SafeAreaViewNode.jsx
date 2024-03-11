import { Handle, Position } from 'reactflow';
import './Node.css';

function SafeAreaViewNode({ id, data, isConnectable }) {
  return (
    <div className="navigation-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <span className="label">
            SafeAreaView
        </span>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
}

export default SafeAreaViewNode;
