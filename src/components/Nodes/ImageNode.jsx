import { Handle, Position } from 'reactflow';
import './Node.css';

function ImageNode({ id, data, isConnectable }) {
  return (
    <div className="navigation-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <span className="label">
            Image
        </span>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
}

export default ImageNode;
