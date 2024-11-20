import React, { useState } from 'react';

function AddRemoveElements() {
  const [elements, setElements] = useState([]);

  const addElement = () => {
    setElements([...elements, `Element ${elements.length + 1}`]);
  };

  const removeElement = (index) => {
    setElements(elements.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Add/Remove Elements</h2>
      <button onClick={addElement}>Add Element</button>
      {elements.map((element, index) => (
        <div key={index}>
          {element}
          <button onClick={() => removeElement(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AddRemoveElements;