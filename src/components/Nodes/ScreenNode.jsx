import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import './Node.css';

function ScreenNode({ id, data, isConnectable }) {
  const [text, setText] = useState(data?.label || '');
  const onChange = useCallback((evt) => {
    setText(evt.target.value);
  }, []);

  return (
    <div className="screen-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} id="a" />
      <div>
        <span className="label">Screen</span>
      </div>
      <div>
        <input value={text} onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default ScreenNode;
