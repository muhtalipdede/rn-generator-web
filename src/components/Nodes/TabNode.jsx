import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import './Node.css';

function TabNode({ id, data, isConnectable }) {
  const [text, setText] = useState(data?.label || '');
  const onChange = useCallback((evt) => {
    setText(evt.target.value);
  }, []);

  return (
    <div className="screen-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <span className="label">Tab Navigation</span>
      </div>
      <div>
        <input value={text} onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
}

export default TabNode;
