import React from 'react';

const AstronautEmail = (props) => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" onBlur={props.onBlur} onChange={(e) => props.updateField(e.target.value)} value={props.field} />
    </div>
  );
};

export default AstronautEmail;