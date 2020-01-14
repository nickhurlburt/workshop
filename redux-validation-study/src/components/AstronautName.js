import React from 'react';

const AstronautName = (props) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" onBlur={props.onBlur} onChange={(e) => props.updateField(e.target.value)} value={props.field} />
    </div>
  );
};

export default AstronautName;