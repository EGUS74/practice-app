import React, { useState } from 'react';

function Checkboxes() {
  const [checked, setChecked] = useState([false, false]);

  const handleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div>
      <h2>Checkboxes</h2>
      <div>
        <input
          type="checkbox"
          checked={checked[0]}
          onChange={() => handleCheck(0)}
        />
        <label>Checkbox 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked[1]}
          onChange={() => handleCheck(1)}
        />
        <label>Checkbox 2</label>
      </div>
    </div>
  );
}

export default Checkboxes;