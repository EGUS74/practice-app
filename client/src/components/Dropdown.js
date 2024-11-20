import React, { useState } from 'react';

function Dropdown() {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <h2>Dropdown</h2>
      <select value={selected} onChange={handleChange}>
        <option value="">Please select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>You selected: {selected}</p>
    </div>
  );
}

export default Dropdown;