import React from 'react';

function CodeToolbar({ handleCopy, handleSave, isLocked, setIsLocked }) {
  const handleLock = () => {
    setIsLocked(!isLocked);
    if (isLocked) {
      alert('Text locked');
    } else {
      alert('Text unlocked');
    }
  };

  return (
    <div className="code-toolbar">
      <button className="button" onClick={handleCopy}>
        Copy
      </button>
      <button className="button" onClick={handleSave}>
        Save
      </button>
      <button className="button" onClick={handleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </button>
    </div>
  );
}

export default CodeToolbar;