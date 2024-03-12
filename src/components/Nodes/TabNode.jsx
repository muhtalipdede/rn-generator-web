import { Handle, Position } from 'reactflow';
import './Node.css';

function TabNode({ id, data, isConnectable }) {
  return (
    <div className="navigation-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <span className="title">Tab Navigation</span>
      </div>
      <div>
        <span className="description">{data.fields[0].value}</span>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
}

export default TabNode;
