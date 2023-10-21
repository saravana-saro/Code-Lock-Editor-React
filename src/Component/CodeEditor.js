import React, { useState, useEffect } from 'react';
import './CodeEditor.css';
import CodeToolbar from './CodeToolbar';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
      setCode(savedCode);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Text copied');
  };

  const handleSave = () => {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('savedCode', code);
      alert('Code saved to local storage');
    } else {
      alert('Local storage is not supported in this browser.');
    }
  };

  return (
    <div className={`code-editor ${isLocked ? 'code-editor__lock locked' : ''}`}>
      <CodeToolbar
        handleCopy={handleCopy}
        handleSave={handleSave}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
      />
      <textarea
        className="code-input"
        placeholder="Enter your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
        disabled={isLocked}
      />
    </div>
  );
}

export default CodeEditor;