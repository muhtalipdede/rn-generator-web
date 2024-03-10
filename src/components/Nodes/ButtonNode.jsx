import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import './Node.css';

function ButtonNode({ id, data, isConnectable }) {
  const [text, setText] = useState(data?.label || '');
  const onChange = useCallback((evt) => {
    setText(evt.target.value);
  }, []);

  return (
    <div className="navigation-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <span className="label">
            Button
        </span>
      </div>
      {data.fields.map((field, index) => (
        field.type === 'object' ? (
            <div key={index} className="field">
                <span className="label">{field.name}</span>
                {field.fields.map((subField, subIndex) => (
                <div key={subIndex} className="field">
                    <span className="label">{subField.name}</span>
                    <input type="text" />
                </div>
                ))}
            </div>
            ) : (
            <div key={index} className="field">
                <span className="label">{field.name}</span>
                <input type="text" value={data[field.name]} onChange={onChange} />
            </div>
            )
      ))}
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
}

export default ButtonNode;
